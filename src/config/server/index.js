import express from 'express';
import cors from 'cors';
import routes from '../routes';

const BASE_API_URL = '/api/v1';
const WELCOME_API_URL = `${BASE_API_URL}/base`;

const app = express();

// cors to allow cross origin requests
app.use(cors());
// Allows to parse JSON payloads in body with correct content type
app.use(express.json());
// Allows to parse URL Encoded data with querystring node module
app.use(express.urlencoded({ extended: true }));
// Mounts specified middleware at path
// Order is necessary
// Default is root path
app.use(WELCOME_API_URL, routes.BaseController);

export default app;