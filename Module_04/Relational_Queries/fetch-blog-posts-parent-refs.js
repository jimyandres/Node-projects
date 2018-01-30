// Parent Refs
const mongoose = require('mongoose');
const database = require('./config/database'); // load the MongoDB configuration
mongoose.Promise = global.Promise;

let url = database.remoteUrl? database.remoteUrl : database.localUrl;
url += database.dbName;
mongoose.connect(url);

// Post Schema
const postSchema = new mongoose.Schema({
  name: String,
  url: String,
  text: String,
});

// Post Model
const Post = mongoose.model('Post', postSchema);

// Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
});

// Comment Model
const Comment = mongoose.model('Comment', commentSchema);

let post = new Post({
  name: 'Top 10 ES6 Features every Web Developer must know',
  url: 'https://webapplog.com/es6',
  text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.'
});


post.save(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Post is saved: ', post.toJSON());
  }
  let i = 0;
  let ca = [
    {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
    {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
    {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
  ].forEach((comment, index, list) => {
    comment.post = post._id;
    const c = new Comment(comment);
    c.save((err, result) => {
      if (err) return console.log(err);;
      i++;
      if (i == list.length) {
        queryCommentWithPost();
      }
    });
  });
});

const queryCommentWithPost = () => {
  // populate
  Comment.findOne({ text: /Cruel/i})
    .populate('post')
    .exec((err, comment) => {
      if (err) return console.error(err)
      console.log(`The comment is ${comment}`)
      mongoose.disconnect()
    });
};
