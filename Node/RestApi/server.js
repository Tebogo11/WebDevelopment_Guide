const express = require("express");

const app = express();

//middleware
app.use(express.static(__dirname + "/public"));

//starting server in express
app.listen(3000);

// req.query -> get the query string as an object
// req.body ->  get data in the body
// req.headers.header -> get data in the header
// req.params -> using the parameter are in the url ex - localhost:3000/1123
// req.status -> the status from the request ex - 404 error
