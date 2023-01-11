import { Router } from 'express';
import UserController from '../controllers/admin/UserController';

const router = Router();

const adminRoutes = app => {
	//manage users routes
	router.get('/users', UserController.index);
	router.post('/users/create', UserController.create);

	app.use('/api/admin', router);
};

export default adminRoutes;
