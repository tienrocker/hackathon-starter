/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var FileHistory = sequelize.define('filehistory', {
    command: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'command'
    },
    directory: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'directory'
    },
    file: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'file'
    },
    size: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: 'size'
    },
    user: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'user'
    },
    ip: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'ip'
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'time'
    },
    serial: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'serial'
    },
    md5: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'md5'
    },
    driverid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'driverid'
    },
    symlink: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'symlink'
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      field: 'status'
    },
    epsUpload: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'eps_upload'
    },
    '480PEncode': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: '480p_encode'
    },
    subsrt: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'subsrt'
    },
    epsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'eps_id'
    },
    googleAccount: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0',
      field: 'google_account'
    },
    statusGg: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'status_gg'
    },
    hydraxStatus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'hydrax_status'
    },
    hydraxSlug: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'hydrax_slug'
    },
    hydraxCreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'hydrax_created_at'
    },
    hydraxUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'hydrax_updated_at'
    }
  }, {
      tableName: 'filehistory',
      timestamps: false
    });

  return FileHistory;
};
