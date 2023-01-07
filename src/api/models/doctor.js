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
			avatar: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.TEXT,
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
