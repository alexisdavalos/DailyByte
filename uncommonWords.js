// This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

const uncommonWords = (string1, string2) => {
  // Variables initialized
  const uncommon = [];
  const sentence1 = string1.split(" ");
  const sentence2 = string2.split(" ");

  // Loop through string1 and compare to string2
  for (word of sentence1) {
    if (!sentence2.includes(word)) {
      uncommon.push(word);
    }
  }
  // Loop through string2 and compare to string1
  for (word of sentence2) {
    if (!sentence1.includes(word)) {
      uncommon.push(word);
    }
  }

  return uncommon;
};

// Ex: given the following examples:

// Test Case # 1
let sentence1 = "the quick";
let sentence2 = "brown fox";
console.log(uncommonWords(sentence1, sentence2)); // => ["the", "quick", "brown", "fox"]

// Test Case # 2
sentence1 = "the tortoise beat the haire";
sentence2 = "the tortoise lost to the  haire";
console.log(uncommonWords(sentence1, sentence2)); // => ["beat", "to", "lost"]

// Test Case # 3
sentence1 = "copper coffee pot";
sentence2 = "hot coffee pot";
console.log(uncommonWords(sentence1, sentence2)); // => ["copper", "hot"]
