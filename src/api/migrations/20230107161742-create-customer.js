'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('customers', {
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
			},
			gender: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			phone_number: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
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
		await queryInterface.dropTable('customers');
	},
};
