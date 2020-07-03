var express = require('express');
var createError = require('http-errors'); //for creating eror messages 
var path = require('path');
var cookieParser = require('cookie-parser'); // parse cookies passed by the browser
var logger = require('morgan'); //for generating logs automatically
const mongoose = require('mongoose'); //for creating schemas for our DB
//const bodyParser = require('bodyParser');


//routes...our middleware
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userInfoRouter = require('./routes/userInfo');
var imagesRouter = require('./routes/images');
var awsCtrl = require("./awsCtrl");
var movieRouter = require("./routes/movie");
var cors = require('cors');
var app = express(); //so we can use express

// Needed to process the env variables
require('dotenv').config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Mongo DB connect
const db = require('./config/keys').mongoURI;

mongoose.connect(
  db,
  { useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err));


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use('/', indexRouter);
app.use('/user',usersRouter);
app.use('/sign_s3', awsCtrl);
app.use('/image', imagesRouter);
app.use('/userInfo', userInfoRouter);
app.use('/movie', movieRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
