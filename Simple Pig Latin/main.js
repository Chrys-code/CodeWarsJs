//Task
// Cut the start of each word in a string and push it to the end
// Push ayy to the end of each word
// Do not touch punctation marks

function pigIt(str) {
  let list = [];
  str.split(" ").map((word) => {
    if (word.match(/^[.,:!?]/)) {
      list.push(word);
    } else {
      const wordSliced = word.slice(1);
      list.push(wordSliced.concat(word[0] + "ay"));
    }
  });

  return list.join(" ");
}
console.log(pigIt("Pig latin is cool !"));

// Refactor
// Ternary operator
// Remove variables
function pigItRef(str) {
  let list = [];
  str.split(" ").map((word) => {
    word.match(/^[.,:!?]/)
      ? list.push(word)
      : list.push(word.slice(1).concat(word[0] + "ay"));
  });
  return list.join(" ");
}
console.log(pigItRef("Pig latin is cool !"));

// Time ~ 20min
// My level 7KYU
// Task 5KYU
// Got ~ 40 Honor for this task :D
