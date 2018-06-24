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

  static AddItemToList(req, res) {
    let isValid = true;
    if (!req.body.firebaseId) {
      isValid = false;
    }
    if (!req.body.listId) {
      isValid = false;
    }
    if (!req.body.listitem) {
      isValid = false;
    }

    if (!isValid) {
      return res.status(httpstatus.BAD_REQUEST).send();
    }

    return List.AddItemById(req.body.listId, req.body.listitem, req.body.firebaseId)
      .then(() => res.status(httpstatus.CREATED).send())
      .catch(err => res.status(httpstatus.UNAUTHORIZED).send(err));
  }
}

module.exports = ListController;
