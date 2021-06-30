const express = require("express");

const app = express();

//middleware -> as a request comes in it will go through use - then got to Get..Post
app.use((req, res, next) => {
  console.log("middleware active");
  //use next to get to app.get
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//routing
//Get
app.get("/", (req, res) => {
  const user = {
    name: "sally",
    hobby: "watersports",
  };
  //auto translates data
  res.send(user);
});

//Post
app.post("/profile", (req, res) => {
  //auto translates data
  const user = req.body;
  console.log(user);
  user.add = "new";
  res.send(user);
});

//starting server in express
app.listen(3000);
