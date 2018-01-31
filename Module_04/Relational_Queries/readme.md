# Relational Queries with Mongoose

In this project have two different approaches to create a relation between blog and comment objects.

## Project Context

You work at a news company and your task is to implement comments for a company blog. Each blog post (story) needs to have many comments. There are two ways to go about the blog implementation.

First, you can save/store all the comments right in the blog post document. This way you have a single collection. The downside is that if you need to access, index, or search individual comments, then having them inside of the blog post collection is not optimal.

The second approach is to create a new collection just for comments. In this collection, you can store comments which will be referenced to/from their blog posts. In the second approach (which is having two collections: posts and comments), you have two options: child refs and parent refs (refs - references).

## Instructions

There are two approaches: Child Refs and Parent Refs. To execute them use the following:

* **Child Refs**

```
$ node fetch-blog-posts.js
```

* **Parent Refs**

```
$ node fetch-blog-posts-parent-refs.js
```

**Note:** Make sure to configure the `/config/database.js` file and the MongoDB starting on port `:27017`.

## Issues

If you discover any bug, please open a new Issue describing the process flow to replicate the problem.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
