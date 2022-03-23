'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      siswa.hasOne(models.jenis_kelamin, {
        as: 'jenis_kelamins',
      })
    }
  }
  siswa.init({
    nis: DataTypes.STRING,
    nins: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    kode_jenis_kelamin: DataTypes.STRING,
    kode_jurusan: DataTypes.STRING,
    kode_kelas: DataTypes.STRING,
    nama_wali_murid: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
  });
  return siswa;
};