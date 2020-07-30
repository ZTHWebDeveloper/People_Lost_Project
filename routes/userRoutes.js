const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');//userController

router.get('/',userController.index);

module.exports = router;