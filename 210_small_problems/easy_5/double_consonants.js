// Write a function that takes a string, and returns a new string in which it doubles every consonant character. It doesn't double vowels (a,e,i,o,u), digits, punctuation, and whitespace.

// Input: string
// Output: new string with every consonant duplicated
  // consonant is any letter exept a, e, i, o, u

// Data Stucture
  // need to itirate through each char to chack if its a consonant
  // Array

// Algorithm
  // split string into array
  // map array if its a consonant duplicate it

function doubleConsonants(string) {
  return string.split('').map(function(char) {
    if (char.match(/[b-z]/i) && !char.match(/[eiou]/i)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}



console.log(doubleConsonants('String'))     // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')) // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'))    // "JJullyy 4tthh"
console.log(doubleConsonants(''))          // ""