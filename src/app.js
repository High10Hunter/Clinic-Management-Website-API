import express from 'express';
import web from './api/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

web.adminRoutes(app);

export default app;
