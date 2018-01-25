const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csv2json = (file = 'example/customer-data.csv') => {

  const convert = (csv_string, callback) => {
    let buff = [];
    csv()
      .fromString(csv_string)
      .on('json', (jsonObj) => {
        buff.push(jsonObj);
      })
      .on('end', () => {
        jsonPretty = JSON.stringify(buff,null,2);
        callback(null, jsonPretty);
      })
      .on('error', (error) => {
        console.log(`Got error: ${error.message}`);
        callback(error);
      });
  };

  const pathFile = path.dirname(file);
  const fileName = path.basename(file, '.csv');
  const csv_string = fs.readFileSync(file, 'utf8');

  convert(csv_string, (error, data) => {
    if (error) return console.log(err);;
    fs.writeFileSync(path.join(pathFile, fileName+'.json'), data);
    console.log(`Converting file is done in folder ${pathFile}`);
  });
};

csv2json(process.argv[2]);
