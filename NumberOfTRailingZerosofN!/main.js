//Task
// Get the number of trailing Zeros of N!

// Notes
// Write a function that returns the n!
// if num < 0 return -1
// if num == 0 return 1
// else num * num -1 * num - 2 * num... n=1  ? how to do that

function zeros(num) {
  let counter = 0;

  // Math Factorial
  if (num === 0) return 0;
  if (num === 1) return 1;

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  console.log(num);

  // prevent sientific notation in case of large INT
  var str = num.toFixed();
  if (str.indexOf("e+") === -1) return str;
  str = str
    .replace(".", "")
    .split("e+")
    .reduce(function (p, b) {
      return p + Array(b - p.length + 2).join(0);
    });

  console.log(str);

  // Reverse the array so tailnumbers are front
  var str = num.toString().split("").reverse();

  //Ierate until the program finds a different number from 0
  for (var k = 0; k < str.length; k++) {
    if (str[k] == 0) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}

console.log(zeros(30));

// Solution
// !Write recursion => write loop to calculate n!
// Prevent scientific notation
// num.toString().split("").reverse() => trailing Zeros in front
// Loop and count++ for each Zeros, if different number found => break;

//Task failed
//Issues while preventing scientific notations  (too much trailing Zeros)
