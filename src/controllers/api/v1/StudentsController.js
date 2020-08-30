import { Router } from 'express';
import Student from '../../../models/student';

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
const StudentsController = Router();

StudentsController.get('/', async (request, response) => {
  const students = await Student.findAll();
  response.json(students);
});

export default StudentsController;
