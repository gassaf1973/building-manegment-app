const express = require('express');
const route = require('../controllers/referenceController');

const router = express.Router();

router.post('/create', route.create);
router.post('/modify', route.modify);
router.get('/list/:name', route.list);

module.exports = router;
