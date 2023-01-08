'use strict';
let { faker } = require('@faker-js/faker/locale/vi');

function randomBoolean() {
	return Math.random() < 0.5;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		let data = [];
		for (let i = 1; i <= 20; i++) {
			data.push({
				name: faker.name.firstName(),
				birthday: faker.date.birthdate(),
				gender: randomBoolean(),
				phone_number: faker.phone.number(),
				email: faker.internet.email(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		await queryInterface.bulkInsert('customers', data, {});
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
