//Task
//Sum intervals

function sumIntervals(intervals) {
  let list = [];
  intervals.forEach(([a, b]) => {

    list.length = Math.max(list.length, b);
    for (let i = a; i < b; i++) {
      list[i] = 1;
    }
  });
  return list.reduce((a, b) => a + b);
}

var test2 = [[1,4],[7, 10],[3, 5], [1, 11]];
console.log(sumIntervals(test2));

//PASSING ON SMPLE TESTS
//NO IDEA WHY IT FAILS ON RANDOM TESTS
//Probably does not handle intervals starting with bigger integer than closing.


//Solution
function combine(first,second) {
  if (first[0] > second[1] || second[0] > first[1]) {
      return false;
  }
  return [ Math.min( first[0], second[0] ), Math.max( first[1], second[1]) ];
}

function sumIntervals2(intervals){
  var index = 0;
  while (index < intervals.length) {
      var repeat = true;
      while (repeat) {
          repeat = false;
          for (var i = index + 1, len = intervals.length; i < len; i += 1) {
              var combined = combine( intervals[index], intervals[i] );
              if (combined) {
                  intervals[index] = combined;
                  intervals.splice(i,1);
                  repeat = true;
                  break;
              }
          }
      }
      index += 1;
  }
  return intervals.reduce(function (sum, interval) { return sum + interval[1] - interval[0];}, 0);
}

console.log(sumIntervals2(test2));
