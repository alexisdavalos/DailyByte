// This question is asked by Facebook. Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

const removeAdjacentDuplicates = (string) => {
  let removed = false;
  let inputString = string.split("");
  let newString = "";

  while (!removed) {
    newString = sliceDuplicates(inputString);
    if (hasDuplicates(newString)) {
      newString = sliceDuplicates(newString);
    } else {
      removed = true;
    }
  }

  function sliceDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        array.splice(i, 2);
      }
    }
    return array;
  }
  function hasDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        return true;
      }
    }
    return false;
  }

  return newString.join("");
};

// Ex: Given the following strings...
console.log(removeAdjacentDuplicates("abccba")); // s = "abccba", return ""
console.log(removeAdjacentDuplicates("foobar")); // s = "foobar", return "fbar"
console.log(removeAdjacentDuplicates("abccbefggfe")); // s = "abccbefggfe", return "a"
