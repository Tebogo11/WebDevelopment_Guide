// const player = "bobby";
// let exp = 100;
// let wizardLvl = false;

// //wizardLvl can only be used in the
// // if since you declared it twice
// if (exp > 90) {
//   let wizardLvl = true;
// }
// console.log(wizardLvl);

// //Error - this cant be change
// const player = "sally";
// //fuction can be const so it cant be changed
// //such as creating a new fuction with the same name
// //by accident you will know

//Destructuring
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

// normal way
// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;

// desctructuring way
const { player, experience } = obj;

console.log(player);
//object properties
const name = "john snow";

const obj2 = {
  [name]: "hello",
  [1 + 2]: "hihi",
};

console.log(obj2);

const a = "Simon";
const b = true;

const objthree = {
  a,
  b,
};

console.log(objthree.a);

// templete String
const greetingBest = `hello ${objthree.a} $500`;
console.log(greetingBest);

//default arguments
function greet(name = "charle", age = "") {
  const greetingBest = `hello ${name} your age is ${age}`;
  console.log(greetingBest);
}

//Arrow function

// normal
function normaladd(a, b) {
  return a + b;
}
// ----------------Same-------------

// Arrow
const arrayFunAdd = (a, b) => a + b;

//
