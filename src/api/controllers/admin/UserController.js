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

export default { index };
