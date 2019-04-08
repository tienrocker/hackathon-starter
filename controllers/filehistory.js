const models = require('../models/mysql');
const Sequelize = require('sequelize');
const FileStore = require('../models/FileStore');
const Op = Sequelize.Op;

const asyncForEach = async function (array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

/**
 * GET /api/filehistory
 * List of File History API.
 */
exports.index = (req, res) => {
    res.json({ title: 'API File History' });
};

/**
 * GET /api/filehistory/sync
 * List of File History API.
 */
exports.sync = (req, res, next) => {

    var limit = parseInt(req.query.limit) || 10;
    var offset = parseInt(req.query.offset) || 0;

    const sync = async () => {

        var latest = await FileStore.findOne().sort({ serial: -1 });

        var where = {};
        if (latest !== null) {
            where = { serial: { [Op.gt]: latest.serial } }
        }

        var items = await models.filehistory.findAll({
            where: where,
            order: [['serial', 'ASC']],
            limit: limit,
            offset: offset
        });

        await asyncForEach(items, async (item) => {
            await FileStore.findOneAndUpdate(
                { serial: item.serial, },
                {
                    serial: item.serial,
                    file: item.file,
                    md5: item.md5,
                },
                { upsert: true, });
        });

        return await res.json({ success: true });
    }

    sync().catch((err) => {
        return res.json({ success: false, message: err.message, stack: err.stack });
    });

};
