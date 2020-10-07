const topKFrequent = (nums, k) => {
  let elements = [];
  let numCount = {};

  // Build HashMap Count
  for (num of nums) {
    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      numCount[num] += 1;
    }
  }

  // Grab keys from hashmap
  let keys = Object.keys(numCount);
  // Sort them from smallest to biggest
  keys.sort((a, b) => a - b);
  // calls findMax based on k
  for (let i = 1; i <= k; i++) {
    findMax(keys);
  }

  // Populates array with top K frequent elements
  function findMax(keys) {
    let maximum = keys[0];
    // find key with the highest value
    for (key of keys) {
      if (numCount[key] > numCount[maximum]) {
        maximum = key;
      }
    }
    // Push the maximum to storage arr
    elements.push(Number(maximum));
    // Remove stored maximum from keys array
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === maximum) {
        keys.splice(i, 1);
      }
    }
  }
  return elements;
};

// Test Cases
console.log(topKFrequent([1, 2, 4, 1, 1, 2], 2)); // => [ 1, 2 ]
console.log(topKFrequent([1], 1)); // => [ 1 ]
console.log(topKFrequent([1, 2, 4, 1, 1, 7, 1, 2, 7, 7, 2, 7], 4)); // => [ 1, 7, 2, 4 ]
