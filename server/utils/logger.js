const winston = require('winston');

const { combine, timestamp, printf } = winston.format;

const logFileFormat = printf(logItem => `${logItem.timestamp}\t${logItem.level}:\t${logItem.message}`);
const logConsoleFormat = printf(logItem => `${logItem.level}:\t${logItem.message}`);

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFileFormat,
  ),
  transports: [
    new winston.transports.File({ filename: 'server.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: logConsoleFormat,
  }));
}

module.exports = logger;
