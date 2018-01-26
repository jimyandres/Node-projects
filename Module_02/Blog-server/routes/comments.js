// GET all comments of a post
const get = (store) => (req, res) => {
  const postId  = req.params.postId;
  res.status(200).send(store.posts[postId].comments);
};

// POST a new comment
const post = (store) => (req, res) => {
  const postId  = req.params.postId;
  const newComment = req.body;
  const commentId = store.posts[postId].comments.lenght;
  store.posts[postId].comments.push(newComment);
  console.log('New comment: \t', store.posts[postId].comments);
  res.status(201).send({commentId:commentId});
};

// PUT an existing post
const put = (store) => (req, res) => {
  const postId  = req.params.postId;
  const commentId  = req.params.commentId;
  store.posts[postId].comments[commentId] = req.body;
  console.log('Updated comment: \t', store.posts);
  res.status(200).send(store.posts[postId].comments[commentId]);
};

// DELETE an existing post
const deleteComment = (store) => (req, res) => {
  try {
    const postId  = req.params.postId;
    const commentId  = req.params.commentId;
    store.posts[postId].comments.splice(commentId, 1);
    console.log('New store: ', store.posts);
    res.status(204).send();
  } catch (e) {
    res.status(404).end(e.message)
  }
};

module.exports = {
  get,
  post,
  put,
  deleteComment
};
