'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Appointment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Customer, Schedule, User }) {
			// define association here
			this.belongsTo(Customer, {
				foreignKey: 'customer_id',
				as: 'customer',
			});
			this.belongsTo(Schedule, {
				foreignKey: 'schedule_id',
				as: 'schedule',
			});
			this.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
		}
	}
	Appointment.init(
		{
			description: {
				type: DataTypes.TEXT,
			},
			diagnosis: {
				type: DataTypes.TEXT,
			},
			price: {
				type: DataTypes.INTEGER,
			},
			status: {
				type: DataTypes.SMALLINT,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'appointments',
			modelName: 'Appointment',
		}
	);
	return Appointment;
};
