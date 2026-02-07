const { body, param } = require('express-validator');

const idRule = [
  param('id').notEmpty().withMessage('ID requis'),
];

const createPostRules = [
  body('title').notEmpty().withMessage('Titre requis'),
  body('content').notEmpty().withMessage('Contenu requis'),
];

const updatePostRules = [
  ...idRule,
  body('title').optional().isString(),
  body('content').optional().isString(),
];

module.exports = {
  idRule,
  createPostRules,
  updatePostRules,
};
