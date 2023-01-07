'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Speciality extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Doctor }) {
			// define association here
			this.hasMany(Doctor, {
				foreignKey: 'speciality_id',
				as: 'doctors',
			});
		}
	}
	Speciality.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
		},
		{
			sequelize,
			timestamp: false,
			tableName: 'specialities',
			modelName: 'Speciality',
		}
	);
	return Speciality;
};
