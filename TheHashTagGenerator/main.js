//Task
// Generate # in front of every word ;
// Capitalize every words' first letter;
// If Final string longer than 140 Char  trurn false;
// If string empty or consists only space return false;

//Notes
//str.map(letter, index)  => capitalize first letter & insert # at the first place
//RegExp replace spaces with "";

function generateHashtag(str) {
  if (str.replace(/\s/g, "") == "") {
    return false;
  } else {
    let strArr = ["#"];
    var sorted = str.split(" ").filter((word) => word.length != "");
    sorted.forEach((word) => {
      word = word.charAt(0).toUpperCase() + word.substr(1);
      strArr.push(word);
    });

    return strArr.join("").length > 140 ? false : strArr.join("");
  }
}

console.log(generateHashtag("    "));

//Refactor
// Removed variable
function generateHashtagRefactored(str) {
  if (str.replace(/\s/g, "") == "") {
    return false;
  } else {
    let strArr = ["#"];
    str
      .split(" ")
      .filter((word) => word.length != "")
      .forEach((word) => {
        word = word.charAt(0).toUpperCase() + word.substr(1);
        strArr.push(word);
      });

    return strArr.join("").length > 140 ? false : strArr.join("");
  }
}

console.log(generateHashtagRefactored("  a  "));
