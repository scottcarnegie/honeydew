const router = require('express').Router();
const UsersController = require('../controllers/users');

router.post('/create', (req, res) => {
  UsersController.Create(req, res);
});

module.exports = router;
