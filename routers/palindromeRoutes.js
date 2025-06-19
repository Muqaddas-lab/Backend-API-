const express = require('express');
const router = express.Router();
const { checkPalindrome } = require('../controllers/palindromeController');

router.post('/palindrome', checkPalindrome);

module.exports = router;
