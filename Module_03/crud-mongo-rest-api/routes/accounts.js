// require the mongodb dependencie for mongodb.ObjectID to convert string to ObjectID
const mongodb = require('mongodb');

// get all accounts stored in db
const get = (db) => (req, res) => {
  db.collection('accounts')
    .find({}, {sort: {_id: -1}})
    .toArray((error, accounts) => {
      if (error) return next(eror);
      res.send(accounts);
    });
};

const post = (db) => (req, res) => {
  const newAccount = req.body;
  db.collection('accounts')
    .insert(newAccount, (error, results) => {
      if (error) return next(eror);
      res.send(results);
    });
};

const put = (db) => (req, res) => {
  const accountId = req.params.id;
  db.collection('accounts')
    .update({_id : mongodb.ObjectID(accountId)},
      {$set: req.body},
      (error, results) => {
        if (error) return next(eror);
        res.send(results);
      });
};

const del = (db) => (req, res) => {
  const accountId = req.params.id;
  db.collection('accounts')
    .remove({_id: mongodb.ObjectID(accountId)}, (error, results) => {
      if (error) return next(eror);
      res.send(results);
    });
};

module.exports = {
  get,
  post,
  put,
  del
};
