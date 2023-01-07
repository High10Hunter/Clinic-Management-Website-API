'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('appointments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			customer_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'customers',
					key: 'id',
				},
			},
			schedule_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'schedules',
					key: 'id',
				},
				unique: true,
			},
			description: {
				type: DataTypes.TEXT,
			},
			diagnosis: {
				type: DataTypes.TEXT,
			},
			price: {
				type: DataTypes.INTEGER,
			},
			status: {
				type: DataTypes.SMALLINT,
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
		await queryInterface.dropTable('appointments');
	},
};
