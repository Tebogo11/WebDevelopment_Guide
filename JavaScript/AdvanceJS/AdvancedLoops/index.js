const basket = ["apples", "oranges", "grapes"];

//for
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i], " for");
}

//forEach
basket.forEach((item) => console.log(item, "forEach"));

//for of
for (item of basket) {
  console.log(item, "for of");
}

// iterating -> we are able to go 1 by 1 through an array

//for in
//works with objects
// we enumerating here , becuase its for objects
const detailedbasket = {
  apples: 5,
  oranges: 10,
  grapes: 100,
};

for (item in detailedbasket) {
  console.log(item);
}
