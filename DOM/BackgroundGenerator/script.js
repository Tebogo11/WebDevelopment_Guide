var _ = require("lodash");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Just run "npm run build"
//Look at package.json script tag
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("anwser: ", _.without(array, 5));
function setGradient(primary, secondary) {
  body.style.background =
    "linear-gradient(to right, " + primary.value + ", " + secondary.value + ")";

  css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", function () {
//   setGradient(color1, color2);
// });

// color2.addEventListener("input", function () {
//   setGradfient(color1, color2);
// });
