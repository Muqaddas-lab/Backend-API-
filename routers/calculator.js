const express = require('express');
const router = express.Router();
const { subtract} = require('../controllers/calController');

router.get('/subtract/:a/:b', subtract);

module.exports = router; 