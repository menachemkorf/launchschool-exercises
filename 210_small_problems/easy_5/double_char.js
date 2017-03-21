// Write a function that takes a string, and returns a new string in which it doubles every character.

// Input: string
// Output: new srtring with each char duplicated

// Algorithm:
//  create new empty string
//  itirate over input
//    for every step append two of the current char to the new string
//  return new string

function repeater(string) {
  var duplicatedString = '';

  for (var i = 0; i < string.length; i++) {
    duplicatedString += string[i];
    duplicatedString += string[i];
  }

  console.log(duplicatedString);
}


repeater('Hello')     // "HHeelllloo"
repeater("Good job!") // "GGoooodd  jjoobb!!"
repeater('')          // ''