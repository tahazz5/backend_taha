const register = ({ name, email }) => ({
  id: 'user_demo_id',
  name,
  email,
});

const login = ({ email }) => ({
  token: 'demo-token',
  user: {
    id: 'user_demo_id',
    email,
  },
});

module.exports = {
  register,
  login,
};
