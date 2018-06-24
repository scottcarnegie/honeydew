const express = require('express');
const cookieParser = require('cookie-parser');
const httpLogger = require('morgan');
const mongoose = require('mongoose');
const { dbAddress } = require('./config/settings');
const logger = require('./utils/logger');

// Route imports
const indexRouter = require('./routes/index');

const app = express();

// Express middlewares
app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to database
mongoose.connect(dbAddress)
  .then(() => {
    logger.info('Connection established to MongoDb.');

    // Route assignments
    app.use('/', indexRouter);

    // Catch 404 and forward to error handler
    app.use((req, res) => (res.status(404).send()));

    logger.info('Server startup complete.');
  })
  .catch((err) => {
    logger.error(`Connection failed to MongoDb: ${err}, ${dbAddress}`);
    process.exit();
  });

module.exports = app;
