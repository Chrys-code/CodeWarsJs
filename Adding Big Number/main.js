//Task
// Add big numbers

//Solution
// Sort numbers into arrays
// SUM (merge) arrays matching the decimals
// Where SUM > 9
// SUM again

const add = (x, y) => {
  const l = Math.max(x.length, y.length);
  const r = Array(l)
    .fill()
    .reduce(
      (a, _, i) => [
        ((a[1] +
          +(x[x.length - 1 - i] || "0") +
          +(y[y.length - 1 - i] || "0")) %
          10) +
          a[0],
        +(
          a[1] + +(x[x.length - 1 - i] || "0") + +(y[y.length - 1 - i] || "0") >
          9
        ),
      ],
      ["", 0]
    );
  return "" + (r[1] ? r[1] : "") + r[0];
};

console.log(add("123", "256"));
