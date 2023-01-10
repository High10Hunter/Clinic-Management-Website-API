import { User } from '../../models';
import { Op } from 'sequelize';

const getAllUser = async (q = '', page = 1, limit = 10) => {
	try {
		if (page < 0 || limit < 10) throw new Error('Page or limit is invalid');

		const offset = (page - 1) * limit;
		const { count, rows } = await User.findAndCountAll({
			offset: offset,
			limit: limit,
			where: {
				name: {
					[Op.like]: `%${q}%`,
				},
			},
			order: [['createdAt', 'DESC']],
		});

		const endPage = Math.ceil(count / limit);
		if (page > endPage) throw new Error('Page is invalid');

		const nextPage = page < endPage ? parseInt(page) + 1 : null;
		const prevPage = page > 1 ? parseInt(page) - 1 : null;

		return { rows, endPage, nextPage, prevPage };
	} catch (error) {
		throw new Error('Cannot get users');
	}
};

export default { getAllUser };
