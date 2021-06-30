//BigInt
//Nullish coalescing opration
//Optional chaining operation

//BigInt
console.log(typeof 1n);

//safe number - javascript has a limit number
console.log(Number.MAX_SAFE_INTEGER);

//BigInt is used when you want to use a number bigger then the max number

//Optional chaining operation
let will = {
  pikachu: {
    species: "mouse",
    height: 0.4,
    weight: 6,
    power: "lightning",
  },
};

let andy = {
  habhab: {
    species: "mouse",
    height: 0.9,
    weight: 30,
  },
};

let weight = will.pikachu.weight;
console.log(weight);

//before
if (andy.pikachu && andy.pikachu.weight) {
  let weight2 = andy.pikachu.weight;
  console.log(weight2);
} else {
  let weight2 = undefined;
  console.log(weight2);
}

//now
//checks each point of the object to see if its their
//instead of a long if && statement
let weight3 = andy?.pikachu?.weight;

console.log(weight3);

//Nullish coalescing opration

//check weather values if false and returns no power if it is
let power = andy?.pikachu?.power || "no power";

console.log(power);

//check if its undefinded or null
let power2 = andy?.pikachu?.power ?? "no power";
console.log(power2);
