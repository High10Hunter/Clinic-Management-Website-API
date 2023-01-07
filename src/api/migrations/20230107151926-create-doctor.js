'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('doctors', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			birthday: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			gender: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			speciality_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'specialities',
					key: 'id',
				},
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('doctors');
	},
};
