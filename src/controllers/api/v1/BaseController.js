import { Router } from 'express';

const BaseController = Router();

BaseController.get('/', (request, response) => {
  return response.json(
    'Hello World'
  );
});

export default BaseController;