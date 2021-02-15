var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// defining an array to work as the database (temporary solution)
const ads = [
    {title: 'Hello, world (again)!'}
  ];
  
  // defining an endpoint to return all ads
  app.get('/getexample', (req, res) => {
    res.send("I have received GET request");
  });

  app.use(bodyParser.urlencoded({ extended: true }));

  // defining an endpoint to return all ads
  app.post('/postexample', (req, res) => {
    res.send("I have received POST request with body: " + JSON.stringify(req.body));
  });



// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3005);

module.exports = app;
