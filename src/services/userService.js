const users = [
  { id: '1', name: 'Admin', email: 'admin@example.com' },
];

const listUsers = () => users;

const createUser = ({ name, email }) => {
  const newUser = { id: String(users.length + 1), name, email };
  users.push(newUser);
  return newUser;
};

const getUser = (id) => users.find((user) => user.id === id);

const updateUser = (id, payload) => {
  const user = getUser(id);
  if (!user) {
    return null;
  }
  Object.assign(user, payload);
  return user;
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return null;
  }
  return users.splice(index, 1)[0];
};

module.exports = {
  listUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
