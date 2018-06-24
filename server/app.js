const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Route imports
const indexRouter = require('./routes/index');

const app = express();

// Express middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route assignments
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res) => (res.status(404).send()));

module.exports = app;
