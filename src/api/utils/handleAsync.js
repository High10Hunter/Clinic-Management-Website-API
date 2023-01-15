async function handleAsync(promise) {
	try {
		const data = await promise;
		return [data, null];
	} catch (error) {
		console.log(error);
		return [null, error];
	}
}

module.exports = { handleAsync };
