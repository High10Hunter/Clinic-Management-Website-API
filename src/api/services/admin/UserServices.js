import { User } from '../../models';

const getAllUser = async (req, res) => {
	try {
		const users = await User.findAll();

		return users;
	} catch (error) {
		throw error;
	}
};

export default { getAllUser };
