var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index')
var electionRouter = require('./routes/electionresults')

var app = express();
var mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://Reader:reader123@cluster0-ixoat.mongodb.net/test?retryWrites=true&w=majority'
//Read only account forr DB, no need to remove/hide password
mongoose.connect(mongoDB, { useNewUrlParser: true, dbName: "Elections" })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Problem'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/electionresults', electionRouter);

module.exports = app;
