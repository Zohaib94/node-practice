import express from 'express';
import cors from 'cors';
import routes from '../routes';

const BASE_API_URL = '/api/v1';
const WELCOME_API_URL = `${BASE_API_URL}/base`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(WELCOME_API_URL, routes.BaseController);

export default app;