const Account = require('../models/Account');

// send response (error or result)
const sendResponse = (err, result, response) => {
  // if there is an error retrieving, send the error
  if (err) response.send(err);
  response.json(result);
}

// get all accounts from mongodb
const getAccounts = response => {
  Account.find((err, result) => {
    sendResponse(err, result, response);
  });
};

// store an account in mongodb
const postAccount = (newAccount, response) => {
  Account.create(newAccount, (err, result) => {
    sendResponse(err, result, response);
  });
};

// find an account in the mongodb
const getAccount = (id, response) => {
  Account.findById(id, (err, result) => {
    sendResponse(err, result, response);
  });
};

// update an account
const updateAccount = (id, data, response) => {
  console.log(id, data);
  Account.update({ _id: id }, { $set: data }, (err, result) => {
    sendResponse(err, result, response);
  });
};

// delete an account
const deleteAccount = (id, response) => {
  Account.remove({ _id: id }, (err, result) => {
    sendResponse(err, result, response);
  });
};

module.exports = app => {
  // get all accounts
  app.get('/accounts', (req, res) => {
    // use mongoose to get all accounts in the db
    getAccounts(res);
  });

  // create an account and send all accounts as response
  app.post('/accounts', (req, res) => {
    // get the new account data
    const newAccount = req.body;
    // use mongoose to insert a new account
    postAccount(newAccount, res);
  });

  // get a specific account
  app.get('/accounts/:id', (req, res) => {
    // get account id
    const id = req.params.id;
    // use mongoose to find a specific account
    getAccount(id, res);
  });

  // update an account
  app.put('/accounts/:id', (req, res) => {
    // get account id
    const id = req.params.id;
    // get the new data
    const newData = req.body;
    // use mongoose to update a specific account
    updateAccount(id, newData, res);
  });

  // delete an account
  app.delete('/accounts/:id', (req, res) => {
    // get account id
    const id = req.params.id;
    // use mongoose to delete an account
    deleteAccount(id, res);
  });
};
