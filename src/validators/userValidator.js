const { body, param } = require('express-validator');

const idRule = [
  param('id').notEmpty().withMessage('ID requis'),
];

const createUserRules = [
  body('name').notEmpty().withMessage('Nom requis'),
  body('email').isEmail().withMessage('Email invalide'),
];

const updateUserRules = [
  ...idRule,
  body('name').optional().isString(),
  body('email').optional().isEmail(),
];

module.exports = {
  idRule,
  createUserRules,
  updateUserRules,
};
