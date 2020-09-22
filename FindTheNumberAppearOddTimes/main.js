// Task:
// Find the number appearing ODD times in the array of Integers
// There will be always a number appearing ODD times

function findOdd(A) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var k = 0; k < A.length; k++) {
      if (A[i] === A[k]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

// Notes:
// Array of itegers ...
// Get each number once
// For each number check how many times it is in the array
// return the number appearing ODD times.

//Implementation
//Iteration in iteration
//Get the first number
//Loop for the rest of the array
//If found identical number count ++ a many times identical number found
//If the count is ODD => number appears ODD number of times
//Return number
