const array = [1, 2, 10, 16];

const double = [];

//just loops and perform action on each element
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

//map, filter, reduce

//map -> loop on each number and return new array
//you always have a return value, well storing the results
//less side effect
const mapArray = array.map((num) => num * 2);

console.log(mapArray);

//filter -> filter our array with a condition
// returns a new array
const filterArray = array.filter((num) => {
  return num > 5;
});

console.log(filterArray);

//reduce
// store something that happens in the body of the function
const reduceArray = array.reduce(
  (acc, num) => {
    //every time you iterate add accumator 1++
    return acc + num;
  },
  //acc default value
  5
);
console.log(reduceArray);
// result is 29 - which is all the numbers added to 0
