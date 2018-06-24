const router = require('express').Router();
const ListController = require('../controllers/lists');

router.post('/create', (req, res) => {
  ListController.CreateNewList(req, res);
});

module.exports = router;
