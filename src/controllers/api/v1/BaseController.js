import { Router } from 'express';

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
const BaseController = Router();

BaseController.get('/', (request, response) => {
  return response.json(
    'Hello World'
  );
});

export default BaseController;