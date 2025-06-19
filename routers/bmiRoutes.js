const express = require('express');
const router = express.Router();
const { calculateBMI } = require('../controllers/bmiController');

router.post('/bmi', calculateBMI);          //Body Mass Index  BMI= Weight (kg)/Height (m)2
module.exports = router;
