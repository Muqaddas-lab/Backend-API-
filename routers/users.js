const express = require('express');
const router = express.Router();
const { getUser, createUser } = require('../controllers/usercontroller');

router.get('/:id', getUser);
router.post('/', createUser);

module.exports = router; 