// Task
// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//such as
//F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
//F(n) * F(n+1) = prod.

//Notes
// The original description was a huge mess...
// What I understood from tests
// Given a number try to return it as two Fibonacci numbers product
// If its possible return in the following form: [55, 89, true]
// If not possible 21 * 34 > 800 > 34 * 55  then return as : [34, 55, false]

var productFib = function (prod) {
  let res = [];
  let fibNumList = [0, 1];
  let findNumberList = [];

  //FibNumbers
  for (var i = 2; i < 40; i++) {
    fibNumList[i] = fibNumList[i - 1] + fibNumList[i - 2];
  }

  //Logic
  for (var k = 0; k < fibNumList.length; k++) {
    //If two fib numbers product is == prod
    if (fibNumList[k] * fibNumList[k + 1] == prod) {
      res.push(fibNumList[k], fibNumList[k + 1], true);
      break;
    } else {
      findNumberList.push(fibNumList[k] * fibNumList[k + 1]);
    }
  }

  if (res.length == 0) {
    for (var k = 0; k < fibNumList.length; k++) {
      //If two fib numbers product is != prod
      if (
        fibNumList[k] * fibNumList[k + 1] ==
        findNumberList.filter((num) => num > prod)[0]
      ) {
        res.push(fibNumList[k], fibNumList[k + 1], false);
        break;
      }
    }
  }
  return res;
};

console.log(productFib(4895));
// [55, 89, true]

//Refactored
var productFibRefactored = function (prod) {
  let fibNumList = [0, 1];
  //FibNumbers
  for (var i = 2; i < 40; i++) {
    fibNumList[i] = fibNumList[i - 1] + fibNumList[i - 2];
  }

  for (var i = 0; i < fibNumList.length; i++) {
    var x = fibNumList[i] * fibNumList[i + 1];

    if (x === prod) {
      return [fibNumList[i], fibNumList[i + 1], true];
    } else if (x > prod) {
      return [fibNumList[i], fibNumList[i + 1], false];
    }
  }
};
console.log(productFibRefactored(4895));
