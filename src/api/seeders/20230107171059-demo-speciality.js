'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('specialities', [
			{
				name: 'Cơ xương khớp',
			},
			{
				name: 'Thần kinh',
			},
			{
				name: 'Tiêu hoá',
			},
			{
				name: 'Tim mạch',
			},
			{
				name: 'Tai mũi họng',
			},
			{
				name: 'Y học cổ truyền',
			},
			{
				name: 'Sản phụ khoa',
			},
			{
				name: 'Da liễu',
			},
			{
				name: 'Nội tiết',
			},
			{
				name: 'Hô hấp',
			},
			{
				name: 'Bệnh nhi',
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
