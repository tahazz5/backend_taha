const { body, param } = require('express-validator');

const idRule = [
  param('id').notEmpty().withMessage('ID requis'),
];

const createProductRules = [
  body('name').notEmpty().withMessage('Nom requis'),
  body('price').isFloat({ min: 0 }).withMessage('Prix invalide'),
];

const updateProductRules = [
  ...idRule,
  body('name').optional().isString(),
  body('price').optional().isFloat({ min: 0 }),
];

module.exports = {
  idRule,
  createProductRules,
  updateProductRules,
};
