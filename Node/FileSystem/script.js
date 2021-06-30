//allow us to access our file system
const fs = require("fs");

//reading file -> im going to read the file but go a head and run everything first
fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("errooooo");
  }
  console.log("1 = Async ", data.toString());
  summary();
});

console.log("First Stack item");

//reads file ->im going to read this file but wait until i finish
const file = fs.readFileSync("./hello.txt");
console.log("2 = Sync ", file.toString());
// utf8 -> standard langauge on the web

console.log("Second Stack item");

const summary = () => {
  console.log("----------------------");
  console.log("Async - waits in the callback stack, until everything is done");
  console.log(
    "Sync - runs and makes everything wait for it until its done, before continuing"
  );
};

//append to a file
fs.appendFile("./hello.txt", ", This is so colol", (err) => {
  if (err) {
    console.log(err);
  }
});

//Write

fs.writeFile("bye.txt", "sad to see you go", (err) => {
  if (err) {
    console.log(err);
  }
});

//Delete
fs.unlink("./bye.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Inception");
});
