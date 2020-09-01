import express from 'express';
import cors from 'cors';
import routes from '../routes';
import sequelize from '../db/sequelize';

const BASE_API_URL = '/api/v1';
const WELCOME_API_URL = `${BASE_API_URL}/base`;
const STUDENTS_API_URL = `${BASE_API_URL}/students`;

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
app.use(STUDENTS_API_URL, routes.StudentsController);

export default {
  app,
  sequelize,
};
