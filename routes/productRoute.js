const express = require('express');
const route = require('../controllers/productController');

const router = express.Router();

router.post('/create', route.create);
router.post('/modify/:_id', route.modify);
router.get('/list', route.list);

module.exports = router;
