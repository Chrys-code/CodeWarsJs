//Test:
// Split a string into 2 character long elements
// if last element's caharacters are ODD relpace 2nd char "_";

function solution(str) {
  let arr = [];
  for (var i = 0; i < str.length - 1; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }
  str.length % 2 !== 0 ? arr.push(str[str.length - 1] + "_") : "";
  return arr;
}

console.log(solution("abcdefg"));

//Implementation:
//Create an answer array (arr)
//Get every first element of the input array and upsh every 1st and 2nd char into answer array.
// i += 2  => skipping every second element as it is added to first elements int answer array.
// Note that for loop skip to push result into answer array if it does not match the criteria (needs to be 2 letters)
// If input array is ODD, give the last iteration's first character + add "_"  => push into answer array.
// return answer arr

/*
  newStr = str.match(/(?([a-z]{2})[a-z]{2}|[a-z]+"_")/g); =
*/
