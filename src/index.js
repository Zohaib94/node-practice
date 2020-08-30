import app from './config/server/index';
const port = 3002

app.listen(port, () => {
  console.log('Running at port 3002')
});