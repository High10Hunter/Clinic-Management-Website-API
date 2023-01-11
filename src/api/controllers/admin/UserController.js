import User from '../../services/admin/UserServices';

const index = async (req, res) => {
	try {
		const { q, page, limit } = req.query;
		const { rows, endPage, prevPage, nextPage } = await User.getAllUser(
			q,
			page,
			limit
		);

		return res.status(200).json({
			message: 'Get users successfully',
			data: rows,
			prevPage,
			nextPage,
			endPage,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: [],
		});
	}
};

const create = async (req, res) => {
	try {
		const user = await User.createUser(req.body);

		return res.status(200).json({
			message: 'Create user successfully',
			data: user,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message || 'Cannot create user',
			data: [],
		});
	}
};

export default { index, create };
