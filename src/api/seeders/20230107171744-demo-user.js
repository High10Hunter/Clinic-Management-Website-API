'use strict';
let { faker } = require('@faker-js/faker/locale/vi');

/** @type {import('sequelize-cli').Migration} */

//random integer between min and max
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//function return random boolean
function randomBool() {
	return Math.random() < 0.5;
}

module.exports = {
	async up(queryInterface, Sequelize) {
		let data = [];
		for (let i = 1; i <= 20; i++) {
			data.push({
				name: faker.name.firstName(),
				birthday: faker.date.birthdate(),
				gender: randomBool(),
				username: faker.internet.userName(),
				password: faker.internet.password(),
				email: faker.internet.email(),
				phone_number: faker.phone.number(),
				role: random(0, 2),
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		await queryInterface.bulkInsert('users', data, {});
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
