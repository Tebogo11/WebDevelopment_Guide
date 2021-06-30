//Evaluate these:
//#1
[2] === [2]; // False
// {} === {} // False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // answer = 4
const object2 = object1; // answer = 4
const object3 = object2; // answer = 4
const object4 = { a: 5 }; // answer = 5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  introduce() {
    console.log(`this is a ${type} and it name is ${name}`);
  }
}

class Mamal extends Animal {
  constructor(name, type, color, food) {
    super(name, type, color);
    this.food = food;
  }
  sound() {
    console.log(`Hello I am a ${this.type}`);
    console.log(`My name is ${this.name}`);
    console.log(`My color is ${this.color}`);
    console.log(`And I love to eat ${this.food}`);
  }
}

const cow = new Mamal("Daisy", "cow", "Blue", "Grass");
console.log(cow);

cow.sound();
