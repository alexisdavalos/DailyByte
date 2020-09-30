// This question is asked by Amazon. Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

const compareKeyStrokes = (s, t) => {
  // Compares processed strings
  let newS = processKeys(s);
  let newT = processKeys(t);
  return newS === newT;
};

const processKeys = (string) => {
  let newString = [];

  for (char of string) {
    if (char !== "#") {
      newString.push(char);
    } else {
      newString.pop();
    }
  }

  return newString.join("");
};

// Ex: Given the following strings...

console.log(compareKeyStrokes("ABC#", "CD##AB")); // return true
console.log(compareKeyStrokes("como#pur#ter", "computer")); //  return true
console.log(compareKeyStrokes("cof#dim#ng", "code")); // return false
