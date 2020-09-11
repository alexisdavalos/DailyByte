// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

// O(n) time | O(n) space
const robotVacuum = (string) => {
  // create a hash table to count occurences
  // make a dictionary of opposite robot moves
  // for every instruction in the string add to hash table
  // count every occurence of instruction
  // check all occurences in hash table, if they are all even, its circular.
  let hashTable = {};
  let moves = {
    L: "R",
    R: "L",
    D: "U",
    U: "D",
  };

  // counting robot instructions
  for (char of string) {
    // key not in hash table
    if (!hashTable[char]) {
      hashTable[char] = 1;
    } else {
      // increment key count by 1
      hashTable[char] += 1;
    }
  }

  // loop through keys in hash table
  for (key in hashTable) {
    // check if equal hash table oppostives counts
    if (hashTable[key] === hashTable[moves[key]]) {
      continue;
    } else {
      // encountered uneven key pairs break out of loop
      return false;
    }
  }
  // All keys had even counts
  return true;
};

console.log(robotVacuum("LR")); // "LR", return true
console.log(robotVacuum("URURD")); // "URURD", return false
console.log(robotVacuum("RUULLDRD")); // "RUULLDRD", return true
