const asyncHandler = require('../utils/asyncHandler');
const postService = require('../services/postService');

const listPosts = asyncHandler(async (req, res) => {
  res.json({ data: postService.listPosts() });
});

const createPost = asyncHandler(async (req, res) => {
  const post = postService.createPost(req.body);

  res.status(201).json({
    message: 'Post créé',
    data: post,
  });
});

const getPost = asyncHandler(async (req, res) => {
  const post = postService.getPost(req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post introuvable' });
  }

  return res.json({ data: post });
});

const updatePost = asyncHandler(async (req, res) => {
  const post = postService.updatePost(req.params.id, req.body);

  if (!post) {
    return res.status(404).json({ message: 'Post introuvable' });
  }

  return res.json({
    message: 'Post mis à jour',
    data: post,
  });
});

const deletePost = asyncHandler(async (req, res) => {
  const post = postService.deletePost(req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post introuvable' });
  }

  return res.json({
    message: 'Post supprimé',
    data: post,
  });
});

module.exports = {
  listPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
