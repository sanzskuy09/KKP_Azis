'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.STRING
      },
      nins: {
        type: Sequelize.STRING
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.STRING
      },
      kode_jenis_kelamin: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "jenis_kelamins",
          key: "kode_jk",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_jurusan: {
        type: Sequelize.STRING
      },
      kode_kelas: {
        type: Sequelize.STRING
      },
      nama_wali_murid: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('siswas');
  }
};