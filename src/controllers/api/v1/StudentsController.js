import { Router } from 'express';
import StudentService from '../../../services/StudentService';
import SuccessResponse from '../../../responses/SuccessResponse';

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

StudentsController.post('/:id/isic', async (request, response) => {
  try {
    const isicCard = await StudentService.createISICCard(request.params.id, request.body);
    response.json(new SuccessResponse(isicCard));
  } catch (err) {
    console.log(err);
    response.status(err.code).json(err.getResource());
  }
});

export default StudentsController;
