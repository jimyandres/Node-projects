// set up ======================================================================
const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const database = require('./config/database'); // load the database configuration
const app = express();

// configuration ===============================================================
app.use(logger('dev'));
app.use(bodyParser.json());

// routes ======================================================================
const routes = require('./routes');
const url = database.remoteUrl? database.remoteUrl : database.localUrl;
mongodb.MongoClient.connect(url, (error, client) => {
  if (error) return process.exit(1);
  console.log("Connected successfully to server");

  const db = client.db(database.name);

  app.get('/accounts', routes.accounts.get(db));
  app.post('/accounts', routes.accounts.post(db));
  app.put('/accounts/:id', routes.accounts.put(db));
  app.delete('/accounts/:id', routes.accounts.del(db));

  app.use(errorhandler());

  // listen (star app with node server.js) =====================================
  app.listen(3000);
  console.log('App listening on port 3000');

});
