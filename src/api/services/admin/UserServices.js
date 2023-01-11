import { User } from '../../models';
import { Op } from 'sequelize';
import { NotFoundError } from '../../errors';
import { hashPassword } from '../../utils';

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
		throw new NotFoundError('Cannot get users');
	}
};

const createUser = async data => {
	try {
		const { birthday } = data;

		//ex: birthday: 1999-03-01 => password: 01031999
		let dateArr = birthday.split('-');
		dateArr.reverse();
		dateArr = dateArr.join('');

		const hashedPassword = await hashPassword(dateArr);

		const user = await User.create({
			...data,
			password: hashedPassword,
			status: 1,
		});

		return user;
	} catch (error) {
		const { errors } = error;
		throw new Error(errors[0].message);
	}
};

const updateUser = async (id, data) => {
	try {
		const user = await User.findByPk(id);

		const { password } = data;

		if (password) {
			console.log(1);
			throw new Error('Cannot update password');
		}

		user.set({
			...data,
		});

		await user.save();

		return user;
	} catch (error) {
		const { errors } = error;
		if (!errors) {
			throw new Error(error.message || 'Cannot update user');
		} else {
			throw new Error(errors[0].message || 'Cannot update user');
		}
	}
};

const deleteUser = async id => {
	try {
		const user = await User.findByPk(id);
		if (!user) {
			throw new Error('User not found');
		}

		await user.destroy();
	} catch (error) {
		throw new Error(error.message || 'Cannot delete user');
	}
};

export default { getAllUser, createUser, updateUser, deleteUser };
