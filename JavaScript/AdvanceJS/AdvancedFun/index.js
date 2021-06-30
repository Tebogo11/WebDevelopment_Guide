//Closures
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

//second function will remember the variable greet (closures)
const newFunc = first();
newFunc();

//children have access to the parent scope
//but parents dont have access to their childrens scope

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => b * b;

console.log(multiply(5, 5));
console.log(curriedMultiply(5)(10));
let arg1 = curriedMultiply(5);
console.log(arg1(5));

//compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoiding Side Effects, functional Purity
//Determising
