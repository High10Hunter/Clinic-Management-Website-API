'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable(
			'schedules',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
				},
				doctor_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'doctors',
						key: 'id',
					},
					unique: 'doctor_id_shift_id_date_unique',
				},
				shift_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: 'shifts',
						key: 'id',
					},
					unique: 'doctor_id_shift_id_date_unique',
				},
				date: {
					type: DataTypes.DATEONLY,
					allowNull: false,
					unique: 'doctor_id_shift_id_date_unique',
				},
				createdAt: {
					allowNull: false,
					type: DataTypes.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: DataTypes.DATE,
				},
			},
			{
				timestamps: true,
				uniqueKeys: {
					doctor_id_shift_id_date_unique: {
						fields: ['doctor_id', 'shift_id', 'date'],
					},
				},
			}
		);
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('schedules');
	},
};
