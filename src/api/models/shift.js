'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Shift extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Schedule }) {
			// define association here
			this.belongsTo(Schedule, { foreignKey: 'shift_id', as: 'shift' });
		}
	}
	Shift.init(
		{
			start_time: {
				type: DataTypes.TIME,
				allowNull: false,
			},
			end_time: {
				type: DataTypes.TIME,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			sequelize,
			tableName: 'shifts',
			modelName: 'Shift',
			indexes: [
				{
					unique: true,
					fields: ['start_time', 'end_time'],
				},
			],
		}
	);
	return Shift;
};
