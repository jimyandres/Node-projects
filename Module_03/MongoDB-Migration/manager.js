const fs = require('fs');
const path = require('path');
const mongodb = require('mongodb');
const async = require('async');
const database = require('./config/database'); // load the mongodb configuration

const manager = (argv) => {
  const url = database.remoteUrl? database.remoteUrl : database.localUrl;
  mongodb.MongoClient.connect(url, (error, client) => {
    if (error) return process.exit(1);
    console.log("Connected successfully to server");

    const db = client.db(database.dbName);

    const dataStringSource = fs.readFileSync(argv[2], 'utf8');
    const dataStringDest = fs.readFileSync(argv[3], 'utf8');

    const backup = JSON.parse(dataStringSource);
    let customers = JSON.parse(dataStringDest);

    const funcs = [];
    const limit = parseInt(argv[4] || 1000);
    customers = customers.map(item => {
      const start = item.id-1;
      const end = (start+limit > customers.length) ? customers.length-1 : start+limit;
      if (start % limit == 0)  {
        funcs.push(callback => {
          db.collection('customers')
            .insert(customers.slice(start, end), callback);
        });
      }
      return {...item, ...backup[item.id]};
    });

    async.parallelLimit(funcs, customers.length, (error, results) => {
      if (error) return console.log(error.message);
      console.log("Data stored in the collection customers");
    });

  client.close();
  });
};

manager(process.argv);
