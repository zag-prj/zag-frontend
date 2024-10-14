var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Define routes
var indexRouter = require('./routes/index');
var contractmanagRouter = require('./routes/contractmanag');
var feedbackRouter = require('./routes/feedback');
var loginRouter = require('./routes/login');
var satisfactionRouter = require('./routes/satisfaction');
var selfserviceRouter = require('./routes/selfservice');
var serschedRouter = require('./routes/sersched');
var servicehistoryRouter = require('./routes/servicehistory');
var supportRouter = require('./routes/support');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Direct to routes
app.use('/', indexRouter);
app.use('/contractmanag', contractmanagRouter);
app.use('/feedback', feedbackRouter);
app.use('/login', loginRouter);
app.use('/satisfaction', satisfactionRouter);
app.use('/selfservice', selfserviceRouter);
app.use('/sersched', serschedRouter);
app.use('/servicehistory', servicehistoryRouter);
app.use('/support', supportRouter);


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
  res.status(err.status || 500 );
  res.render('error',{title: err.message});
});

module.exports = app;
