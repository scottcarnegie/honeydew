const httpstatus = require('http-status-codes');
const List = require('../models/list');

class ListController {
  static CreateNewList(req, res) {
    if (!req.body.firebaseId || !req.body.name) {
      return res.status(httpstatus.BAD_REQUEST).send();
    }

    return List.Create(req.body.name, req.body.firebaseId)
      .then(() => res.status(httpstatus.CREATED).send())
      .catch(() => res.status(httpstatus.CONFLICT).send());
  }
}

module.exports = ListController;
