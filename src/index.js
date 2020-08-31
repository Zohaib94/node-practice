import server from './config/server/index';
import Models from './models/index';

const port = 3002;

server.sequelize
  .authenticate()
  .then(async () => {
    await Models.Student.sync();
    await Models.ISICCard.sync();
    await Models.Transaction.sync();

    console.log('Connected to Database Successfully');

    // binds and listens for connections on specified port
    server.app.listen(port, () => {
      console.log('Running at port 3002');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
