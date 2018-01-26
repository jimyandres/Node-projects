const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let store = [];
store.accounts = [];

let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.use((req, res, next) => {
  console.log('Current store: \t', store.accounts);
  next();
});

app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts);
});

app.post('/accounts', (req, res) => {
  let newAccount = req.body;
  let id = store.accounts.lenght;
  store.accounts.push(newAccount);
  console.log('New store: ', store.accounts);
  res.status(201).send({id:id});
});

app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body;
  console.log('New store: \t', store.accounts);
  res.status(200).send(store.accounts[req.params.id]);
});

app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice(req.params.id, 1);
  console.log('New store: ', store.accounts);
  res.status(204).send();
});

app.listen(3000);
