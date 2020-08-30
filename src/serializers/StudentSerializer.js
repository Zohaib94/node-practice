import StudentResponse from '../responses/StudentResponse';

class StudentSerializer {
  static toResource(studentObject) {
    const studentResource = new StudentResponse(
      studentObject.firstName,
      studentObject.lastName,
      studentObject.id,
    );
    return studentResource;
  }
}

export default StudentSerializer;
