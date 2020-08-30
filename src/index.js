import app from './config/server/index';
const port = 3002

// binds and listens for connections on specified port
app.listen(port, () => {
  console.log('Running at port 3002')
});