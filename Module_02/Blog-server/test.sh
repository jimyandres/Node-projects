//posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"

//posts comment data
curl -H "Content-Type: application/json" -X POST -d '{"comment": "Testing post method"}'  "http://localhost:3000/posts/0/comments"

//updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

//gets post data
curl "http://localhost:3000/posts"

//gets comments of a post
curl "http://localhost:3000/posts/0/comments"

//deletes comment of a post at specific id
curl -X DELETE "http://localhost:3000/posts/0/comments/0"

//deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"
