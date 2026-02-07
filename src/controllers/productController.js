const asyncHandler = require('../utils/asyncHandler');
const productService = require('../services/productService');

const listProducts = asyncHandler(async (req, res) => {
  res.json({ data: productService.listProducts() });
});

const createProduct = asyncHandler(async (req, res) => {
  const product = productService.createProduct(req.body);

  res.status(201).json({
    message: 'Produit créé',
    data: product,
  });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = productService.getProduct(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Produit introuvable' });
  }

  return res.json({ data: product });
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = productService.updateProduct(req.params.id, req.body);

  if (!product) {
    return res.status(404).json({ message: 'Produit introuvable' });
  }

  return res.json({
    message: 'Produit mis à jour',
    data: product,
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = productService.deleteProduct(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Produit introuvable' });
  }

  return res.json({
    message: 'Produit supprimé',
    data: product,
  });
});

module.exports = {
  listProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
