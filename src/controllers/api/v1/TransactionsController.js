import { Router } from 'express';
import StudentService from '../../../services/StudentService';
import SuccessResponse from '../../../responses/SuccessResponse';

const TransactionsController = Router({ mergeParams: true });

TransactionsController.post('/', async (request, response) => {
  try {
    const payment = await StudentService.generatePayment(request.params.studentId, request.body);
    response.json(new SuccessResponse(payment));
  } catch (err) {
    console.log(err);
    response.status(err.code).json(err.getResource());
  }
});

export default TransactionsController;
