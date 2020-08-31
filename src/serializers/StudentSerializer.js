import StudentResponse from '../responses/StudentResponse';

class StudentSerializer {
  static toResource(studentObject) {
    const studentResource = new StudentResponse(
      studentObject.id,
      studentObject.firstName,
      studentObject.lastName,
    );
    return studentResource;
  }
}

export default StudentSerializer;
