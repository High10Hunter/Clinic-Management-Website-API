import User from '../../services/admin/UserServices';

const index = async (req, res) => {
	try {
		const users = await User.getAllUser();

		return res.status(200).json({
			message: 'success',
			data: users,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Something went wrong',
			data: [],
		});
	}
};

export default { index };
