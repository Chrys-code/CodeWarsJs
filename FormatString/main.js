// Task:
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  return names
    .map((x) => x.name)
    .join(", ")
    .replace(/,([^,]*)$/, " &$1");
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Lisa" },
    { name: "Lisa" },
    { name: "Lisa" },
  ])
);

// map names for object.names
// join all with comma
// replace regex last comma with &;
