# MongoDB Migration Node Script

*The assignment lab for this module is to build a migration script to move data from one MongoDB database to another.*

This is a MongoDB Migration Node script, that allows to merge the current customers data (a JSON file) with the backup (rest of missing data, also a JSON file). The resulting data is now inserted in batches (this number is given by the user - default is 1000).

## Instructions

To use this script you can use the JSON files stored in the `example` folder:

```
m3-customer-address-data.json // Contains the backup data

m3-customer-data.json // Contains the incomplete data
```

To run the script:

```
$ node manager.js <backup_data> <incomplete_data> <batch_number>
```

**Note:** The `batch_number` field is optional, the default value is 1000.

## Known issues

The proposed implementation does not support to exchange the order of the data to merge (just like backup and then the incomplete data).

## Issues

If you discover any bug, please open a new Issue describing the process flow to replicate the problem.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
