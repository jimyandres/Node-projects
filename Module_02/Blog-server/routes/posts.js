// GET all posts
const get = (store) => (req, res) => {
  res.status(200).send(store.posts);
};

// POST a new post
const post = (store) => (req, res) => {
  const newPost = req.body;
  newPost.comments = [];
  const postId = store.posts.lenght;
  store.posts.push(newPost);
  console.log('New post: \t', store.posts);
  res.status(201).send({postId:postId});
};

// PUT an existing post
const put = (store) => (req, res) => {
  const postId  = req.params.postId;
  const oldPost = store.posts[req.params.postId];
  store.posts[postId] = {...oldPost,...req.body};
  console.log('Updated post: \t', store.posts);
  res.status(200).send(store.posts[postId]);
};

// DELETE an existing post
const deletePost = (store) => (req, res) => {
  store.posts.splice(req.params.postId, 1);
  console.log('New store: ', store.posts);
  res.status(204).send();
};

module.exports = {
  get,
  post,
  put,
  deletePost
};
