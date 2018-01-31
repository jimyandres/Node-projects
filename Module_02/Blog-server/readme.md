# RESTful Blog API

This project is a RESTful blog API server, that allows the CRUD functionalities for Posts and Comments from a Blog. This servers uses an in-memory store for the data, **it doesn't use any Data Base.**

## Instructions

To run the script use the following command line:

```
$ node server.js
```

## Routes (endpoints) available

|ENDPOINTS  |METHOD  |FUNCTIONALITY |
|---|:---:|---|
|`/posts`| `GET`| Get all posts|
|`/posts`| `POST`| Create a new post|
|`/posts/postId`| `PUT`| Update a specific post|
|`/posts/postId`| `DELETE`| Delete a post|
|`/posts/postId/comments`| `GET`| Get all comments of a post|
|`/posts/postId/comments`| `POST`| Create a new comment|
|`/posts/postId/comments/commentId`| `PUT`| Update a specific comment|
|`/posts/postId/comments/commentId`| `DELETE`| Delete a comment|

## Issues

If you discover any bug, please  open a new Issue describing the process flow to replicate the problem.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
