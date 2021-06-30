var enterbtn = document.getElementById("enter");
var deletebtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var userinput = input.value;
  li.appendChild(
    document.createTextNode(
      userinput.charAt(0).toUpperCase() + userinput.slice(1)
    )
  );
  console.log(li);
  li.classList.add("done");
  li.classList.toggle("done");
  ul.appendChild(li);
  input.value = "";
}

enterbtn.addEventListener("click", function () {
  console.log("clicking is working");
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (inputLength() > 0 && e.key === "Enter") {
    createListElement();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

deletebtn.addEventListener("click", function () {
  console.log("clicking is working");
  if (inputLength() > 0) {
    createListElement();
  }
});
