//Task
// Given any number of places and their distaces [ls].
// Given a maximum distance [t] we want to make to visit [3] towns.
// Calculate the maximum distance can be made between 3 towns out of many towns that does not exceed [t]

function chooseBestSum(t, k, ls) {
  let distSUM = [];

  if (ls.length < 3 || ls == null || ls == "") return null;

  //All variation SUM push to distSUM for 3 towns
  let a = 0;
  let b = 0;

  for (var i = 0; i < ls.length; i++) {
    a = ls[i];
    for (var j = 1; j < ls.length; j++) {
      if (i === j) {
        j++;
        b = ls[j];
      } else {
        b = ls[j];
      }
      for (var k = 2; k < ls.length; k++) {
        if (j === k || i === k) {
          k++;
          if (j === k || i === k) {
            k++;
            distSUM.push(a + b + ls[k]);
          } else {
            distSUM.push(a + b + ls[k]);
          }
        } else {
          distSUM.push(a + b + ls[k]);
        }
      }
    }
  }

  //For loop example:
  //i iteration //50                                                  //55                //57
  //j iteration //55        //57          //58          //60          //57         //...  //xx => 58
  //k iteration //57,58,60  //57=>58,60   //57,58=>60   //57,58,xx    //57=>58,60  //...  //...

  //Filter  remove duplicates and NaNs produced by over iterations
  resList = distSUM
    .filter((num) => num > 0)
    .filter(
      (value, index) =>
        distSUM.filter((num) => num > 0).indexOf(value) === index
    );

  var lowerMax = Math.max.apply(
    null,
    resList.filter((number) => number <= t)
  );

  return lowerMax ? lowerMax : null;
}

//t = max distance
//k = number of towns to be visited
//ls=[distances]
console.log(chooseBestSum(331, 3, [91, 74, 73, 85, 73, 81, 87]));

//The task failed
//Any number of towns [k] can be given in the original task.
