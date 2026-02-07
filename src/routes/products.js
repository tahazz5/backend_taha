const express = require('express');

const authMiddleware = require('../middleware/auth');
const productController = require('../controllers/productController');
const validateRequest = require('../validators/validateRequest');
const { idRule, createProductRules, updateProductRules } = require('../validators/productValidator');

const router = express.Router();

router.get('/', productController.listProducts);
router.post('/', authMiddleware, createProductRules, validateRequest, productController.createProduct);
router.get('/:id', idRule, validateRequest, productController.getProduct);
router.put('/:id', authMiddleware, updateProductRules, validateRequest, productController.updateProduct);
router.delete('/:id', authMiddleware, idRule, validateRequest, productController.deleteProduct);

module.exports = router;
