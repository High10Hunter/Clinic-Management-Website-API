import { Router } from 'express';
import UserController from '../controllers/admin/UserController';

const router = Router();

const adminRoutes = app => {
	//manage users routes
	router.get('/users', UserController.index);

	app.use('/admin', router);
};

export default adminRoutes;
