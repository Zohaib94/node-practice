import dotenv from 'dotenv';
import BaseController from '../controllers/api/v1/BaseController';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export default {
  BaseController,
};
