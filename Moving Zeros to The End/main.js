// Task
// move all zeros to the end of the array
// preserving the order of the array with different data types

// Notes
// Removing Zeros and pshing to the end
// Noticed with debugger if there are more consecutive Zeros in the array =>
// Removing a Zero will cause next Zero's (or element's) index to drop by 1
// Adding Zeros to the end in the same iteration will cause infinite loop

var moveZeros = function (arr) {
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      counter++;
      i -= 1;
    }
  }

  for (var k = 0; k < counter; k++) {
    arr.push(0);
  }

  return arr;
};

console.log(
  moveZeros([
    "a",
    0,
    "b",
    "c",
    "d",
    1,
    1,
    3,
    1,
    9,
    0,
    0,
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])
);

// Solution
// Writing loop
// Once loop founds a Zero as Number => array.splice(i,1) &  it should be iterating from the same index again
// as if there are consecutive Zeros they will drop to the same Index otherwise the loop will iterate over them !

// Creating a counter that counts how many Zeros been removed allows us to push Zeros to the end after all Zeros are removed
// This prevents us from infinite loop mentioned before
