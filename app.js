var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var morgan = require('morgan');
var compression = require('compression');
var cors = require('cors')
const bodyParser = require('body-parser')

// const tokenCheckPage = require('./services/serverToken');


const { DB_MONGO_CONNECTION_STRING } = require('./utils/urls');

const {jwtCheck} = require('./services/serverToken');

var publisherRouter = require('./routes/loginRoutes');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// parse application/x-www-form-urlencoded
// parse application/json   
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(BOOKSBASEURL, publisherRouter);
app.use('/bookpublisher', publisherRouter);
app.use('/users', usersRouter);

const {
  unCaughtExceptionHandler,
} = require('./utils/helper_tools');
var db = require('./repo/db_connection');
db.connect(DB_MONGO_CONNECTION_STRING);
var {
  BOOKSBASEURL,
} = require('./utils/endpoints');
// app.use(tokenCheckPage);



// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
  console.log(err,'err');
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  console.log(err
    ,"err");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


process.on('uncaughtException', unCaughtExceptionHandler);
process.on('unhandledRejection', unCaughtExceptionHandler);

// app.listen(4000);

module.exports = app;
