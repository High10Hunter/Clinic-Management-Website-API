import bcrypt from 'bcryptjs';

const hashPassword = async password => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);
	return hashPassword;
};

const validPassword = async (password, hashPassword) => {
	const valid = await bcrypt.compare(password, hashPassword);
	return valid;
};

module.exports = { hashPassword, validPassword };
