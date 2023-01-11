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
				validate: {
					notEmpty: {
						msg: 'Name is required',
					},
					notNull: {
						msg: 'Name is required',
					},
				},
			},
			birthday: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'Birthday is required',
					},
					notNull: {
						msg: 'Birthday is required',
					},
					isDate: {
						msg: 'Birthday must be date',
					},
					isBefore: {
						args: new Date().toISOString().split('T')[0],
						msg: 'Birthday must be before today',
					},
				},
			},
			gender: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'Gender is required',
					},
					notNull: {
						msg: 'Gender is required',
					},
				},
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					args: true,
					msg: 'This username has been used',
				},
				validate: {
					notEmpty: {
						msg: 'Username is required',
					},
					notNull: {
						msg: 'Username is required',
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'Password is required',
					},
					notNull: {
						msg: 'Password is required',
					},
					minLength(value) {
						if (value.length < 8) {
							throw new Error(
								'Password must be at least 8 characters'
							);
						}
					},
				},
			},
			phone_number: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					args: true,
					msg: 'This phone number has been used',
				},
				validate: {
					notEmpty: {
						msg: 'Phone number is required',
					},
					notNull: {
						msg: 'Phone number is required',
					},
					isNumeric: {
						msg: 'Phone number must be number',
					},
					minLength(value) {
						if (value.length < 10) {
							throw new Error(
								'Phone number must be at least 10 digits'
							);
						}
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					args: true,
					msg: 'This email has been used',
				},
				validate: {
					notEmpty: {
						msg: 'Email is required',
					},
					notNull: {
						msg: 'Email is required',
					},
					isEmail: {
						msg: 'Invalid email',
					},
				},
			},
			role: {
				type: DataTypes.SMALLINT,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'Role is required',
					},
					notNull: {
						msg: 'Role is required',
					},
					isIn: {
						args: [[0, 1, 2]],
						msg: 'Role must be 0, 1 or 2',
					},
				},
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
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
