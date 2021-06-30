import fs from "fs";

fs.readFile("./input.txt", (err, data) => {
  console.time("funfunction");
  const inst = data.toString();
  const strArray = inst.split("");
  let floor = 0;
  strArray.forEach((item) => {
    if (item === "(") {
      floor = floor + 1;
    } else {
      floor = floor - 1;
    }
  });
  console.log(floor);
  console.timeEnd("funfunction");
});

//https://adventofcode.com/2015/day/1 -> challenge
