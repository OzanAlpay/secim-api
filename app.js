var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

var indexRouter = require('./routes/index')
var electionRouter = require('./routes/electionresults')

var app = express();
var mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://Reader:reader123@cluster0-ixoat.mongodb.net/test?retryWrites=true&w=majority'
//Read only account forr DB, no need to remove/hide password
mongoose.connect(mongoDB, { useNewUrlParser: true, dbName: "Elections" })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Problem'))
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', indexRouter)
app.use('/electionresults', electionRouter);

module.exports = app;
