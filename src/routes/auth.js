const express = require('express');

const authController = require('../controllers/authController');
const validateRequest = require('../validators/validateRequest');
const { registerRules, loginRules } = require('../validators/authValidator');

const router = express.Router();

router.post('/register', registerRules, validateRequest, authController.register);
router.post('/login', loginRules, validateRequest, authController.login);

module.exports = router;
