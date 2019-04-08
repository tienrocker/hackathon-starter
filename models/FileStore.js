const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const fileStoreSchema = new mongoose.Schema({
  serial: { type: Number, unique: true, required: true, dropDups: true },
  file: String,
  md5: String,
}, { timestamps: true });

fileStoreSchema.plugin(uniqueValidator);
const FileStore = mongoose.model('FileStore', fileStoreSchema);

module.exports = FileStore;
