//reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
// object1 and object2 are the same, because object2
// goes to the location that stores object1 to takes its values
//but object3 create a whole new value

var a = 5;
var b = a;

b++;

var c = [1, 2, 34, 45, 3];
var d = c;
//d just goes to the reference link of a inmemory
//so the become the same object
//if d were to change its values, so would c, because
//it changes the reference point not the object its self
d.push(1123322);
console.log(d);
console.log(c);
// to over come this just create a new array before storing
//example for object
let obj = { a: "a", b: "b", c: { deep: "try clone me" } };

let clone = Object.assign({}, obj);
let clone2 = { ...obj };

//deep clone
// if their are more then 1 level of objects or arrays
let superClone = JSON.parse(JSON.stringify(obj));
//change it to a string then change it back in to an object

obj.c.deep = "ahaha";
obj.b = "changed";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
// ---------------------------------------------------------------------
//Context
//Scope vs Context

// parent scope
function b() {
  // child scope
  let a = a;
}

this.alert();
//these two are the same
window.alert();
// this -> just refers to where the obejct can be found

// ----------------------------------------------------------------------------------------
//Instantiation
//makinga copy of any object and using it for something else

//class -> something i want to make a copy of
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi i am ${this.name}, I'm a ${this.type}`);
  }
}

// I want to add on top of what Player class has
class Wizard extends Player {
  constructor(name, type, mageLevel) {
    super(name, type);
    this.mageLevel = mageLevel;
  }
  play() {
    console.log(`I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer", 100);
console.log(wizard1);
