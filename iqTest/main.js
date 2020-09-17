// Task:
// Bob needs to find out which one of the given numbers differs from the others in a given array full of integers.
// Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Short logic:
// Split the string array and convert to integers
// number % 2 === 0 => the number is EVEN else ODD
// Return the index + 1 (assuming the task expect a real life index not computer handled index)

function iqTest(numbers) {
  let arrStringSplit = numbers.split(" ");
  let arrInteger = arrStringSplit.map((number) => parseInt(number));

  if (
    arrInteger.filter((x) => x % 2 === 0).length >
    arrInteger.filter((x) => x % 2 !== 0).length
  ) {
    var search = arrInteger.filter((x) => x % 2 !== 0);
    return arrInteger.findIndex((x) => x == search) + 1;
    // more than 1 even number
    // looking for ODD number
  } else {
    var search = arrInteger.filter((x) => x % 2 === 0);
    return arrInteger.findIndex((x) => x == search) + 1;
    // more than 1 ODD number
    // looking for EVEN number
  }
}

console.log(iqTest("1 3 4 5 7 9"));

//Implementation:
// Arrays are given in strings separated with "space"  => numbers.split(" ") + .map(parseInt()) to create a new array of integers.
// Determine what are we looking for? For ODD numbers in EVEN array or in reverse?
// If number / 2 remainder is 0 its EVEN  else ODD => compare filter.length  EVEN > ODD
// IF TRUE => Look for ODD in EVEN array and find index
// IF FALSE => Look for EVEN in ODD array and find index

// Refactor:
function iqTestRefactor(numbers) {
  let arrInteger = numbers.split(" ").map((number) => parseInt(number));
  return arrInteger.filter((x) => x % 2 === 0).length >
    arrInteger.filter((x) => x % 2 !== 0).length
    ? arrInteger.findIndex((x) => x == arrInteger.filter((x) => x % 2 !== 0)) +
        1
    : arrInteger.findIndex((x) => x == arrInteger.filter((x) => x % 2 === 0)) +
        1;
}
console.log(iqTestRefactor("1 3 4 5 7 9"));

// Merged Arrays
// If statement converted into ternary operator
// Search variable inserted into the filter() function
