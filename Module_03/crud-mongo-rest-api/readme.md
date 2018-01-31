# CRUD REST API with Node, Express and MongoDB

This is another version of a CRUD REST API, now using MongoDB and the MongoDB native driver module to keep all the data intact in any event of a server crash or restart.

## Instructions

To run the script use the following command line:

```
$ node server.js
```

**Note:** Make sure to configure the `/config/database.js` file and the MongoDB starting on port `:27017`.

## Routes (endpoints) available

|ENDPOINTS  |METHOD  |FUNCTIONALITY |
|---|:---:|---|
|`/accounts`| `GET`| Get all accounts|
|`/accounts`| `POST`| Create an account|
|`/accounts/id`| `PUT`| Update a specific account|
|`/accounts/id`| `DELETE`| Delete a specific account|

## Issues

If you discover any bug, please  open a new Issue describing the process flow to replicate the problem.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
