//Task:
//Given any originalText(s).
//Return another text that contains every letter from the originalText(s) as many times as the letter's index+1.
//Letters should be separated by "-" per identic letters.
//Every first letter be Capital others are Lower.

function accum(s) {
  const arr = s.split("");
  let caseSensitiveArray = [];
  let resultArr = [];

  arr.forEach((letter, index) => {
    caseSensitiveArray.push(letter.toLowerCase().repeat(index + 1));
  });

  for (var x = 0; x < caseSensitiveArray.length; x++) {
    resultArr.push(
      caseSensitiveArray[x].charAt(0).toUpperCase() +
        caseSensitiveArray[x].slice(1)
    );
  }

  return resultArr.join("-");
}

console.log(accum("hEEEllo"));

//Array => caseSensitiveArray => resultArray
//Push every letter => caseSensitiveArray as many times as its index + 1 + toLowerCase()
//First letter to uppercase for every element of resultArr
//Return resultArr.join("-");

// Refactor / change .forEach() to .map()
// index + 1 instead: c.toUppercase() + c.toLowerCase().repeat(index);
// Remove possible variables
function accumRefactored(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
