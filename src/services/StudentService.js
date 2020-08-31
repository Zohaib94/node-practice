import Student from '../models/Student';
import StudentSerializer from '../serializers/StudentSerializer';
import ISICCardSerializer from '../serializers/ISICCardSerializer';
import TransactionSerializer from '../serializers/TransactionSerializer';
import ErrorResponse from '../responses/ErrorResponse';

class StudentService {
  static async findAll() {
    try {
      const students = await Student.findAll();

      return students.map((category) => StudentSerializer.toResource(category));
    } catch (error) {
      throw new ErrorResponse(error.message, 422);
    }
  }

  static async createStudent(params) {
    try {
      const newStudent = await Student.create(params);

      return StudentSerializer.toResource(newStudent);
    } catch (error) {
      throw new ErrorResponse(error.message, 422);
    }
  }

  static async createISICCard(studentID, params) {
    try {
      const student = await Student.findByPk(studentID);

      if (!student) {
        throw new Error('Student Not Found');
      }

      let isicCard = await student.getISICCard();

      if (isicCard) {
        throw new Error('Student already has an ISIC Card');
      } else {
        isicCard = await student.createISICCard(params);
        return ISICCardSerializer.toResource(isicCard);
      }
    } catch (error) {
      throw new ErrorResponse(error.message, 422);
    }
  }

  static async generatePayment(studentID, params) {
    try {
      const student = await Student.findByPk(studentID);

      if (!student) {
        throw new Error('Student Not Found');
      }

      const isicCard = await student.getISICCard();

      if (!isicCard) {
        throw new Error('Student does not have an ISIC Card');
      } else {
        const payment = await isicCard.createTransaction(params);
        return TransactionSerializer.toResource(payment);
      }
    } catch (error) {
      throw new ErrorResponse(error.message, 422);
    }
  }
}

export default StudentService;
