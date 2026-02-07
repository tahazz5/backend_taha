const posts = [
  { id: '1', title: 'Bienvenue', content: 'Premier post.' },
];

const listPosts = () => posts;

const createPost = ({ title, content }) => {
  const newPost = { id: String(posts.length + 1), title, content };
  posts.push(newPost);
  return newPost;
};

const getPost = (id) => posts.find((post) => post.id === id);

const updatePost = (id, payload) => {
  const post = getPost(id);
  if (!post) {
    return null;
  }
  Object.assign(post, payload);
  return post;
};

const deletePost = (id) => {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return null;
  }
  return posts.splice(index, 1)[0];
};

module.exports = {
  listPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
