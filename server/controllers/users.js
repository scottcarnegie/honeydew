const httpstatus = require('http-status-codes');
const User = require('../models/user');

class UserController {
  static Create(req, res) {
    if (!req.body.firebaseId) {
      return res.status(httpstatus.BAD_REQUEST).send();
    }
    return User.CreateUser({
      firebaseId: req.body.firebaseId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })
      .then(() => {
        res.status(httpstatus.CREATED).send();
      })
      .catch(() => {
        res.status(httpstatus.CONFLICT).send();
      });
  }
}

module.exports = UserController;
