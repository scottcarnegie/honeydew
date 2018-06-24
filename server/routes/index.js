const router = require('express').Router();
const httpstatus = require('http-status-codes');

router.get('/', (req, res, next) => {
    return res.status(httpstatus.OK).send({message: "Server is running."});
});

module.exports = router;