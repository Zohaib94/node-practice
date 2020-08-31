import { Router } from 'express';
import StudentService from '../../../services/StudentService';
import SuccessResponse from '../../../responses/SuccessResponse';
import ISICCardsController from './ISICCardsController';
import TransactionsController from './TransactionsController';

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
const StudentsController = Router();

StudentsController.get('/', async (request, response) => {
  try {
    const students = await StudentService.findAll();
    response.json(new SuccessResponse(students));
  } catch (err) {
    console.log(err);
    response.status(err.code).json(err.getResource());
  }
});

StudentsController.post('/', async (request, response) => {
  try {
    const student = await StudentService.createStudent(request.body);
    response.json(new SuccessResponse(student));
  } catch (err) {
    console.log(err);
    response.status(err.code).json(err.getResource());
  }
});

StudentsController.use('/:studentId/isic_cards', ISICCardsController);
StudentsController.use('/:studentId/payments', TransactionsController);

export default StudentsController;
