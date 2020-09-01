import request from 'supertest';
import Server from '../src/config/server/index';
import Models from '../src/models/index';

const ROOT_URL = '/api/v1/students';

describe('StudentsController', () => {
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

  it('GET /students (empty list)', async (done) => {
    const res = await request(Server.app).get(ROOT_URL);
    const expectedResult = [];

    expect(res.statusCode).toEqual(200);
    expect(res.body.resource).toEqual(expectedResult);
    done();
  });

  it('POST /students (success)', async (done) => {
    const inputObject = {
      firstName: 'Zohaib',
      lastName: 'Ahmed',
    };

    const res = await request(Server.app)
      .post(ROOT_URL)
      .send(inputObject);

    expect(res.statusCode).toEqual(200);
    expect(res.body.resource.firstName).toEqual(inputObject.firstName);
    expect(res.body.resource.lastName).toEqual(inputObject.lastName);
    done();
  });

  it('GET /students (return list)', async (done) => {
    const res = await request(Server.app).get(ROOT_URL);
    const expectedResult = 'Zohaib';

    expect(res.statusCode).toEqual(200);
    expect(res.body.resource[0].firstName).toEqual(expectedResult);
    done();
  });
});
