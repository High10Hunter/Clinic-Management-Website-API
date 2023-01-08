'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('shifts', [
			{
				start_time: '07:00:00',
				end_time: '07:30:00',
			},
			{
				start_time: '07:30:00',
				end_time: '08:00:00',
			},
			{
				start_time: '08:00:00',
				end_time: '08:30:00',
			},
			{
				start_time: '08:30:00',
				end_time: '09:00:00',
			},
			{
				start_time: '09:00:00',
				end_time: '09:30:00',
			},
			{
				start_time: '09:30:00',
				end_time: '10:00:00',
			},
			{
				start_time: '10:00:00',
				end_time: '10:30:00',
			},
			{
				start_time: '10:30:00',
				end_time: '11:00:00',
			},
			{
				start_time: '11:00:00',
				end_time: '11:30:00',
			},
			{
				start_time: '13:00:00',
				end_time: '13:30:00',
			},
			{
				start_time: '13:30:00',
				end_time: '14:00:00',
			},
			{
				start_time: '14:00:00',
				end_time: '14:30:00',
			},
			{
				start_time: '14:30:00',
				end_time: '15:00:00',
			},
			{
				start_time: '15:00:00',
				end_time: '15:30:00',
			},
			{
				start_time: '15:30:00',
				end_time: '16:00:00',
			},
			{
				start_time: '16:00:00',
				end_time: '16:30:00',
			},
			{
				start_time: '16:30:00',
				end_time: '17:00:00',
			},
			{
				start_time: '17:00:00',
				end_time: '17:30:00',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
