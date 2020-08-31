import { Router } from 'express';
import StudentService from '../../../services/StudentService';
import SuccessResponse from '../../../responses/SuccessResponse';

// Router is isolated instance of middleware and routes capable of only routing and middleware functions

// mergeparams to receive params from parent

// middleware Middleware functions are functions that have access to the
// request object (req), the response object (res), and the next middleware function
// in the application’s request-response cycle.
const ISICCardsController = Router({ mergeParams: true });

ISICCardsController.post('/', async (request, response) => {
  try {
    console.log(request.params);
    const isicCard = await StudentService.createISICCard(request.params.studentId, request.body);
    response.json(new SuccessResponse(isicCard));
  } catch (err) {
    console.log(err);
    response.status(err.code).json(err.getResource());
  }
});

export default ISICCardsController;
