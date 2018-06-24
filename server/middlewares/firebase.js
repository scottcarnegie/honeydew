const firebaseAdmin = require('firebase-admin');
const firebaseServiceAccount = require('../config/firebase-key.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseServiceAccount),
  databaseURL: 'https://honeydew-list-app.firebaseio.com',
});

const verifyUser = (req, res, next) => {
  // Do work to verify user
  next();
};

module.exports = {
  verifyUser,
};
