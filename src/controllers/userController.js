const asyncHandler = require('../utils/asyncHandler');
const userService = require('../services/userService');

const listUsers = asyncHandler(async (req, res) => {
  res.json({ data: userService.listUsers() });
});

const createUser = asyncHandler(async (req, res) => {
  const user = userService.createUser(req.body);

  res.status(201).json({
    message: 'Utilisateur créé',
    data: user,
  });
});

const getUser = asyncHandler(async (req, res) => {
  const user = userService.getUser(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur introuvable' });
  }

  return res.json({ data: user });
});

const updateUser = asyncHandler(async (req, res) => {
  const user = userService.updateUser(req.params.id, req.body);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur introuvable' });
  }

  return res.json({
    message: 'Utilisateur mis à jour',
    data: user,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = userService.deleteUser(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur introuvable' });
  }

  return res.json({
    message: 'Utilisateur supprimé',
    data: user,
  });
});

module.exports = {
  listUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
