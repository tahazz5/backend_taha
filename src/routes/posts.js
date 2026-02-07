const express = require('express');

const authMiddleware = require('../middleware/auth');
const postController = require('../controllers/postController');
const validateRequest = require('../validators/validateRequest');
const { idRule, createPostRules, updatePostRules } = require('../validators/postValidator');

const router = express.Router();

router.get('/', postController.listPosts);
router.post('/', authMiddleware, createPostRules, validateRequest, postController.createPost);
router.get('/:id', idRule, validateRequest, postController.getPost);
router.put('/:id', authMiddleware, updatePostRules, validateRequest, postController.updatePost);
router.delete('/:id', authMiddleware, idRule, validateRequest, postController.deletePost);

module.exports = router;
