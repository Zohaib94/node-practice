import request from 'supertest';
import Server from '../src/config/server/index';
import Models from '../src/models/index';
import StudentService from '../src/services/StudentService';

const ROOT_URL = '/api/v1/students';

describe('ISICCardsController', () => {
  beforeAll(async (done) => {
    Server.sequelize
      .authenticate()
      .then(async () => {
        await Models.Student.sync();
        await Models.ISICCard.sync();
        await Models.Transaction.sync();

        done();
      });
  });

  afterAll(async (done) => {
    await Server.sequelize.sync({ force: true });
    done();
  });

  it('POST /students/:studentId/isic_cards (success)', async (done) => {
    const studentData = {
      firstName: 'Zohaib',
      lastName: 'Ahmed',
    };

    const inputObject = {
      number: '1230123012301230',
      cvv: '213',
      expiry: '12/22',
    };

    const student = await StudentService.createStudent(studentData);

    const res = await request(Server.app)
      .post(`${ROOT_URL}/${student.id}/isic_cards`)
      .send(inputObject);

    expect(res.statusCode).toEqual(200);

    expect(res.body.resource.number).toEqual(inputObject.number);
    expect(res.body.resource.cvv).toEqual(inputObject.cvv);
    expect(res.body.resource.expiry).toEqual(inputObject.expiry);

    done();
  });
});
