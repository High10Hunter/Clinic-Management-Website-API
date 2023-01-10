'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Doctor, Appointment }) {
			// define association here
			this.hasOne(Doctor, { foreignKey: 'user_id', as: 'doctor' });
			this.hasMany(Appointment, {
				foreignKey: 'user_id',
				as: 'appointments',
			});
		}

		toJSON() {
			return {
				...this.get(),
				id: undefined,
				password: undefined,
				createdAt: undefined,
				updatedAt: undefined,
			};
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			birthday: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			gender: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
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
			role: {
				type: DataTypes.SMALLINT,
				allowNull: false,
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'users',
			modelName: 'User',
		}
	);
	return User;
};
