// Write a function that takes a non-empty string argument, and returns the middle character or characters of the argument. If the argument has an odd length, you should return exactly one character. If the argument has an even length, you should return exactly two characters.

// Input: non-empty string
// Output: string with 1 or 2 chars

// Rules:
  // if the string has an even number of chars: return the two middle chars
  // if the string has an odd number of chars: return the middle char

// Data structure: string
  // We can slice the string from first middle char to last midddle char

// Algorithm
  // middle = Math.ceil(str.length / 2)
  // return str.slice(middle, -middle)

function centerOf(string) {
  // if (string.length === 1) {
  //   return string;
  // }

  // var middleIndex = Math.ceil(string.length / 2);
  // return string.slice(middleIndex - 1, -middleIndex + 1);

  if (string.length % 2 === 0) {
    return string.substr(string.length / 2 - 1, 2);
  } else {
    return string.substr(Math.floor(string.length / 2), 1);
  }
}


// odd

console.log(centerOf('abc'));    // 'b'

console.log(centerOf('I love ruby'));    // 'e'
console.log(centerOf('Launch School'));  // ' '

// even

console.log(centerOf('help'));    // 'el'

console.log(centerOf('Launch'));         // 'un'
console.log(centerOf('Launchschool'));   // 'hs'

// single char

console.log(centerOf('x'));              // 'x'