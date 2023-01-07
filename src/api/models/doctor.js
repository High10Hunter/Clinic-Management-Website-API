'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Doctor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Speciality, User, Schedule }) {
			// define association here
			this.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
			this.belongsTo(Speciality, {
				foreignKey: 'speciality_id',
				as: 'speciality',
			});
			this.hasMany(Schedule, {
				foreignKey: 'doctor_id',
				as: 'schedules',
			});
		}
	}
	Doctor.init(
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
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'doctors',
			modelName: 'Doctor',
		}
	);
	return Doctor;
};
