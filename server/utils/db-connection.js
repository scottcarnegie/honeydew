const mongoose = require('mongoose');
const { dbAddress } = require('../config/settings');
const logger = require('./logger');

const connection = mongoose.connect(dbAddress);

const establishConnection = () => {
  return new Promise((resolve, reject) => {
    return connection
      .then(() => {
        logger.info('Connection established to MongoDb.');
        resolve();
      })
      .catch((err) => {
        logger.error(`Connection failed to MongoDb: ${err}, ${dbAddress}`);
        reject(err);
      });
  });
};

module.exports = {
  establishConnection,
  mongoose,
};
