const express = require('express');
const route = require('../controllers/userController');

const router = express.Router();

router.post('/login', route.login);
router.post('/signup', route.signup);

module.exports = router;