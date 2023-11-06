function isPalindrome(word) {
  wordArray = [];

  for (let letter in word) { wordArray += word[letter]};
  return handleCompare(wordArray);
};

function handleCompare(array) {
  let index = 0;
  let counter = 0;

  while (index < array.length) {
    if (array[index] == array[array.length - (index + 1)]) {
      counter++;
      if (counter == array.length) {return true};
    };
    index++;
  };
  return false;
};


/* 
isPalindrome function (takes a word)
  create an array of each letter in the word
  if first letter is same as last then look at second and second to last...
  if odd number of letters, ignore middle letter
  if reached mid of word without fail return true
*/

/*
  Within the isPalindrom function I took a word and broke the letters down into an array.
  I then created a new function to handle the comparison between the letters, if the
  first letter of the word and the last letter were the same then the index would increase,
  and I would check the second letter and second to last letter. For each pass, the counter 
  would increase. If the counter was equal to the word length, then the function would
  return true (which would pass to the return statemernt of the original function).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
