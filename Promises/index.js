const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (!true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

promise.then((result) => console.log(result));

//chaining
promise.then((result) => result + "!").then((result2) => console.log(result2));

//Catch errors
promise2
  .then((result) => result + "!")
  .then((result2) => console.log(result2))
  .catch(() => console.log("error!"));
//it will catch any error within the chain
promise
  .then((result) => {
    throw Error;
    result + "!";
  })
  .then((result2) => console.log(result2))
  .catch(() => console.log("error!"));

//The catch will only catch error of elements aabove it
promise
  .then((result) => {
    result + "!";
  })
  .then((result2) => console.log(result2))
  .catch(() => console.log("error!"))
  .then(() => {
    throw Error;
  })
  .catch(() => {
    console.log("error 2");
  });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOkie");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "is it me your looking for");
});

console.log("--------------Wait 5 seconds-----------------");
//takes an array of promises
Promise.all([promise, promise3, promise4, promise5]).then((values) => {
  console.log(values);
});
//it waited till all promises were resolved before login out the value

//when we want to use promises
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
//if promise.all fails it returns an error
//fetch has a promise
