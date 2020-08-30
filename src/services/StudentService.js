import Student from '../models/Student';
import StudentSerializer from '../serializers/StudentSerializer';
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
}

export default StudentService;
