// Task:
// SUM two numbers "a" and "b" and every number between.
// if  "a" and "b" equal, return a || b example: (1+1) => 1

function getSum(a, b) {
  return Math.abs((a - b) / 2) % 2 === 0
    ? Math.abs((a - b) / 2) * (a + b) + (a + b)
    : Math.abs((a - b) / 2) * (a + b) + (a + b) / 2;
}
console.log(getSum(5, 1));

//Using math: halve the difference => Math.abs((a - b) / 2) % 2 === 0 ?
//if numberpairs (EVEN) return (a+b * numberpairs)
// return  Math.abs((a - b) / 2) % 2 === 0 ? Math.abs((a - b) / 2) * (a + b) + (a + b);

//Why? - a+b = (a+1) + (b-1); Thus every numberpair can be made is equal to (a+b);

// ODD numberpairs?
// Middle numberpair must be equal value example: (a === b) => 1+1 || 2+2; this case we wont return SUM, just 1 || 2  as (a || b).
// Easier to change the outter numberpair to (a+b) / 2
// It is possible since the formula does not contain the outter (original) numberpair so it needs to be added separately.
// return   Math.abs((a - b) / 2) % 2 !== 0 ? Math.abs((a - b) / 2) * (a + b) + (a + b) / 2;

// THE PROBLEM
// "a" and "b" are unordered numbers the formula does not handle with it.
// Seemingly the formula has exceptions to handle positive and negative numbers however I havent tested it just for this purpose it can be the problem with unordered numbers.
// Thus works in 87:27 ratio on random tests.

// Suggested Solution :
// Came up with a solution, It is simple but not as efficient.
// For loop.

// a - b || b - a returns a differecial (n) where every single number should SUM via for loop from "start" to n.
// Define start: Start should be the lowest number => compare a-b & b-a
// let start = a-b < b-a ? a-b : b-a
// Define end: opposite of start: let end = a-b > b-a ? a-b : b-a
// Dont forget to include "a" & "b" return (var i = start-1; i>= end+1; i++) => SUMn
