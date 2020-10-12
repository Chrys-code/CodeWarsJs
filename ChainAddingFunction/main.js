/*
Task:
Create function that can be called in chain and adding numbers in chain...
*/

/* That's one solution however the tests calls function in function.
Creating an object that keeps track of it's state in "counter"
const add = {
  counter: 0,
  addFn: function(n){
  return this.counter += n
}
}

var n = 7;
var n2 = 8;
console.log(add.addFn(n),add.addFn(n2), add.counter,);


That's another solution however the tests still suggests a function that has a function.
Abstract counter of an es6 arrow function then increase it's value by the fn with closure.
var counter = 0;
const add = (n) => {
  return counter += n
}

console.log(add(7), add(8), add(99));
*/


// So the task suggests function in a function  => recursion? probably as we call the same function
/*
function add(n) {

  return function res(b) {
    return n+b
  };
}

console.log(add(7)(8)(99));
*/


function add(n){
  var fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}

console.log(add(7)(8)(99));
