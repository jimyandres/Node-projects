const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

const store = [];
store.posts = [];

const routes = require('./routes');


const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

// POSTS ROUTES
app.get('/posts', routes.posts.get(store));
app.post('/posts', routes.posts.post(store));
app.put('/posts/:postId/', routes.posts.put(store));
app.delete('/posts/:postId/', routes.posts.deletePost(store));

// COMMENTS ROUTES
app.get('/posts/:postId/comments', routes.comments.get(store));
app.post('/posts/:postId/comments', routes.comments.post(store));
app.put('/posts/:postId/comments/:commentId', routes.comments.put(store));
app.delete('/posts/:postId/comments/:commentId', routes.comments.deleteComment(store));

app.listen(3000);
console.log('App listening on port 3000');
