'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Schedule extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Doctor, Shift, Appointment }) {
			// define association here
			this.belongsTo(Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
			this.belongsTo(Shift, { foreignKey: 'shift_id', as: 'shift' });
			this.hasMany(Appointment, {
				foreignKey: 'schedule_id',
				as: 'appointments',
			});
		}
	}
	Schedule.init(
		{
			date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'schedules',
			modelName: 'Schedule',
			indexes: [
				{
					unique: true,
					fields: ['date', 'doctor_id', 'shift_id'],
				},
			],
		}
	);
	return Schedule;
};
