//Task
//Every digit of a given number should be SUMMED then do the same with the new number until it remains 1 digit long.
//Task example required a path how it should work.

function reduce(n) {
  var str = n.toString();
  let digitList = [];
  let sum;
  for (var i = 0; i <= str.length - 1; i++) {
    digitList.push(parseInt(str[i]));
  }
  sum = digitList.reduce((a, c) => a + c);
  str = sum.toString();
  do {
    digitList.length = 0;
    for (var i = 0; i <= str.length - 1; i++) {
      digitList.push(parseInt(str[i]));
    }
    sum = digitList.reduce((a, c) => a + c);
    str = sum.toString();
  } while (sum >= 10);
  return sum;
}
console.log(reduce(666));

//Solution:
// Number type toString
// Digits length are followed via a list
// For loop changes every item back to integer and pushes it into a new list. => SUM the individual numbers via reduce(). => change toString again
// Now initial sum is given => // While loop => sum >= 10  (two digits), repeat.

//Data Example
//28 => 2+8 = 10
// 10
// runs
//delete list => new list
//new sum should be 1
//break;
//return sum value
