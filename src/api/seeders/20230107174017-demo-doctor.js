'use strict';
let { faker } = require('@faker-js/faker/locale/vi');
const { Speciality, User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const specialities_id = await Speciality.findAll({
			attributes: ['id'],
		});
		const users_id = await User.findAll({
			attributes: ['id'],
		});

		//random element inside speciality_ids
		function randomSpeciality() {
			return specialities_id[
				Math.floor(Math.random() * specialities_id.length)
			].id;
		}

		//random element inside users
		function randomUser() {
			return users_id[Math.floor(Math.random() * users_id.length)].id;
		}

		function randomPrice() {
			return Math.floor(Math.random() * 900000);
		}

		let data = [];
		for (let i = 1; i <= 20; i++) {
			data.push({
				description: faker.lorem.paragraph(),
				price: randomPrice(),
				speciality_id: randomSpeciality(),
				user_id: randomUser(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		await queryInterface.bulkInsert('doctors', data, {});
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
