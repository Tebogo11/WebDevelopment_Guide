console.log("Hello".padStart);
console.log("Hello".padEnd);

const fun = (a, b, c, d) => {
  console.log(a);
};
fun(1, 2, 3, 4);

Object.values;
Object.entries;
Object.keys;

let obj = {
  username0: "Santa",
  username1: "Dan",
  username2: "joe",
};

//iterate through objects before
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

//iterate through objects now
Object.values(obj).forEach((values) => {
  console.log(values);
});

//iterate through objects now, return objects and keys
Object.entries(obj).forEach((values) => {
  console.log(values);
});
