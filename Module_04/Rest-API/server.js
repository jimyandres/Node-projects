// set up ======================================================================
const express = require('express');
const app = express();
const logger = require('morgan'); // log requests to the console (express4)
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const mongoose = require('mongoose'); // mongoose for mongodb
const database = require('./config/database'); // load the database configuration

// configuration ===============================================================
// connect to mongoDB database
let url = database.remoteUrl? database.remoteUrl : database.localUrl;
url += database.dbName;
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
app.once('open', function callback () {
  console.log("DB connected");
});

// log every request to the console
app.use(logger('dev'));
// parse application/json
app.use(bodyParser.json());

// routes ======================================================================
require('./app/routes').accounts(app);

// listen (star app with node server.js) =======================================
app.listen(8080);
console.log('App listening on port 8080');
