require('dotenv').config();
import app from './src/app';

const { PORT } = process.env || 3000;

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

process.on('SIGINT', () => {
	server.close(() => console.log(`exits server express`));
});
