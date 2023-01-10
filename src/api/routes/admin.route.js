import { Router } from 'express';
import UserConotroller from '../controllers/admin/UserController';

const router = Router();

const adminRoutes = app => {
	//manage users routes
	router.get('/users', UserConotroller.index);

	app.use('/admin', router);
};

export default adminRoutes;
