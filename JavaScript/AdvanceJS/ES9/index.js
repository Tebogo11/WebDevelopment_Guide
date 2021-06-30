// const array = [1, [2, 3], [4, 5]];
// const array1unnest = array.flat();
// //Unnest the array by 1 level
// console.log(array1unnest);

// // we can tell flat how many level to unnest
// const array2 = [1, [2, [3]], [4, [5]]];
// const array2unnest = array2.flat(5);
// console.log(array2unnest);

// //clean up empty enteris
// const unclean = ["hello", , , , , "world"];
// const clean = unclean.flat();
// console.log(clean);

// //map with flat
// const newclean = unclean.flatMap((item) => item + "123");
// console.log(newclean);

// //get rid of blank spaces
// userEmail = "            edd@live.co.uk";
// console.log(userEmail.trimStart());
// //trimEnd

// //change an an array to an object
// userProfiles = [["commander", 23], ["derek", 40], [(hansel, 14)]];
// Object.fromEntries(userProfiles);

// console.log(Object.fromEntries(userProfiles));

//try and catch

try {
  //try this
  bob + "h1";
} catch {
  //if their is an error go here
  console.log("you missed up");
}

try {
  //try this
  bob + "h1";
} catch (error) {
  //if their is an error go here
  console.log("you missed up", error);
}

const animals = {
  tiger: 25,
  lion: 5,
  monkey: 10,
  bird: 9,
};

const { tiger, lion, ...rest } = animals;

console.log(tiger);
console.log(rest);

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

objectSpread(tiger, lion, rest);
