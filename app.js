import { area, perimeter } from "./rectangle.js";

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  if (l <= 0 || w <= 0) {
    console.log("Dimensions must be greater than 0");
  } else {
    console.log(`The are of the rectangle is ${area(l, w)}.`);
    console.log(`The perimeter of the rectangle is ${perimeter(l, w)}`);
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
