// Task:
// Find out if number is perfect square.

var isSquare = function (n) {
  Number.isInteger(Math.sqrt(n)) ? true : false;
};

console.log(isSquare(-1));

//The Solution:
// JavaScript has a dedicated function to calculate square.
// Check if the result number is integer.
// Done.
