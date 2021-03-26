const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(arr) {
  arr.shift()
  return arr
}

assertEqual(tail([1, 2, 3]).length, [2, 3].length);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");