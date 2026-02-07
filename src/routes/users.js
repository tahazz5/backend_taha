const express = require('express');

const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');
const validateRequest = require('../validators/validateRequest');
const { idRule, createUserRules, updateUserRules } = require('../validators/userValidator');

const router = express.Router();

router.get('/', authMiddleware, userController.listUsers);
router.post('/', authMiddleware, createUserRules, validateRequest, userController.createUser);
router.get('/:id', authMiddleware, idRule, validateRequest, userController.getUser);
router.put('/:id', authMiddleware, updateUserRules, validateRequest, userController.updateUser);
router.delete('/:id', authMiddleware, idRule, validateRequest, userController.deleteUser);

module.exports = router;
