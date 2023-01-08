'use strict';
let { faker } = require('@faker-js/faker/locale/vi');
const { Doctor, Shift } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const doctors_id = await Doctor.findAll({
			attributes: ['id'],
		});

		//random element inside doctors_id
		function randomDoctor() {
			return doctors_id[Math.floor(Math.random() * doctors_id.length)].id;
		}

		const shifts_id = await Shift.findAll({
			attributes: ['id'],
		});

		//random element inside shifts_id
		function randomShift() {
			return shifts_id[Math.floor(Math.random() * shifts_id.length)].id;
		}

		let data = [];
		for (let i = 1; i <= 20; i++) {
			data.push({
				doctor_id: randomDoctor(),
				shift_id: randomShift(),
				date: faker.date
					.between('2021-01-01', '2023-01-05')
					.toISOString()
					.split('T')[0],
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		await queryInterface.bulkInsert('schedules', data, {});
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
