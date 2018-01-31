# REST-API

This RESTful-API project was build with the following dependencies:

* ``express`` framework.
* ``mongoose`` library, for CRUD operations over MongoDB.
* ``morgan`` for a log in the server side.
* ``errorhandler`` for error handling

## RESTFUL-API WITH MONGOOSE

This CRUD RESTful project uses the useful functions available in the Mongoose database library to create a server for manage some kind of  accounts.

## INSTRUCTIONS

To run the script use the following command line:

```
$ node server.js
```

**Note:** Make sure to configure the `/config/database.js` file and the MongoDB starting on port `:27017`.

## ROUTES (ENDPOINTS) AVAILABLE

|ENDPOINTS  |METHOD  |FUNCTIONALITY |
|---|:---:|---|
|`/accounts`| `GET`| Get all accounts|
|`/accounts`| `POST`| Create an account|
|`/accounts/id`| `GET`| Get specific account|
|`/accounts/id`| `PUT`| Update a specific account|
|`/accounts/id`| `DELETE`| Delete a specific account|

## Issues and Security Vulnerabilities

If you discover any bug, please  open a new Issue describing the process flow to replicate the problem.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
