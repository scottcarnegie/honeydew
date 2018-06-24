const express = require('express');
const cookieParser = require('cookie-parser');
const httpLogger = require('morgan');
const logger = require('./utils/logger');
const db = require('./utils/db-connection');

// Route imports
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listsRouter = require('./routes/lists');

const app = express();

// Express middlewares
app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

db.establishConnection()
  .then(() => {
    // Route assignments
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/lists', listsRouter);

    // Catch 404 and forward to error handler
    app.use((req, res) => (res.status(404).send()));

    logger.info('Server startup complete.');
  })
  .catch(() => process.exit());

module.exports = app;
