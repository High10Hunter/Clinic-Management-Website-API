import { sequelize } from '../models';

const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Database connected');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

export default connectDB;
