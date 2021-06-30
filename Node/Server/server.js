const http = require("http");

const server = http.createServer((req, res) => {
  //console.log("I hear you ");
  //req -> gives me information on the request thats being made
  console.log("header : ", req.headers);
  console.log("method : ", req.method);
  console.log("url : ", req.url);

  // res -> send back information
  const user = {
    name: "john",
    hobby: "sports",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
});

server.listen(3000);
