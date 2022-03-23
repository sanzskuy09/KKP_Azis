'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenis_kelamin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jenis_kelamin.belongsToMany(models.siswa, {
        as: 'siswa',
        foreignKey: {
          name: 'kode_jenis_kelamin'
        }
      })
    }
  }
  jenis_kelamin.init({
    jenis_kelamin: DataTypes.STRING,
    kode_jk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jenis_kelamin',
  });
  return jenis_kelamin;
};