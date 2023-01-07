'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable(
			'shifts',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
				},
				start_time: {
					type: DataTypes.TIME,
					allowNull: false,
					unique: 'start_end_time_unique',
				},
				end_time: {
					type: DataTypes.TIME,
					allowNull: false,
					unique: 'start_time_end_time_unique',
				},
			},
			{
				timestamps: false,
				uniqueKeys: {
					start_time_end_time_unique: {
						fields: ['start_time', 'end_time'],
					},
				},
			}
		);
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('shifts');
	},
};
