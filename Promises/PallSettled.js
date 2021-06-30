const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

//wont resolve if theirs an error
Promise.all([promise1, promise2]).then((data) => console.log(data));

//Will resolve either if theirs an error or not
Promise.allSettled([promise1, promise2]).then((data) => console.log(data));
