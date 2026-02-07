const asyncHandler = require('../utils/asyncHandler');
const authService = require('../services/authService');

const register = asyncHandler(async (req, res) => {
  const user = authService.register(req.body);

  res.status(201).json({
    message: 'Compte créé avec succès',
    user,
  });
});

const login = asyncHandler(async (req, res) => {
  const payload = authService.login(req.body);

  res.json({
    message: 'Connexion réussie',
    ...payload,
  });
});

module.exports = {
  register,
  login,
};
