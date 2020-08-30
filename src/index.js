import server from './config/server/index';

const port = 3002;

server.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to Database Successfully');

    // binds and listens for connections on specified port
    server.app.listen(port, () => {
      console.log('Running at port 3002');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
