require('dotenv').config()

//DEPENDENCIES
const express     = require('express'),
      http        = require('http'),
      morgan      = require('morgan');

//ROUTES
const heartbeat   = require('../routes/heartbeat');

//MIDDLEWARE
const notFound    = require('../middleware/notFound');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(morgan('dev', {
  skip: (req, res) => res.StatusCode < 400,
  stream: process.stderr
}));
app.use(morgan('dev', {
  skip: (req, res) => res.StatusCode >= 400,
  stream: process.stdout
}));
app.use('/heartbeat', heartbeat);
app.use('*', notFound);

http.createServer(app).listen(app.get('port'));
console.log(`Server is running on port ${app.get('port')}`);

module.exports = app;
