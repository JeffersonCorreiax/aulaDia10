const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginControllers');


router.get('/Login', LoginController.index);
router.post('/Login', LoginController.login);








module.exports = router;