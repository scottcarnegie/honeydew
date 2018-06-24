const router = require('express').Router();
const ListController = require('../controllers/lists');

router.post('/create', (req, res) => {
  ListController.CreateNewList(req, res);
});

router.post('/add-item', (req, res) => {
  ListController.AddItemToList(req, res);
});

module.exports = router;
