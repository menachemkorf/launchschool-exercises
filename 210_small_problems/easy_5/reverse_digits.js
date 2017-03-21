// Write a function that takes a positive integer as an argument and returns that number with its digits reversed. Examples:


// Input: positive number
// Output: new positive number where the digits are in reversed from the input value
  // without the trailing zeros from the input value

// Algorithm
  // convert number into string
  // split into array
  // reverse array
  // join into string
  // convert back to number
  // return number

function reversedNumber(number) {
  var numString = String(number);
  var reversed = numString.split('').reverse().join('');
  return parseInt(reversed, 10);
}


console.log(reversedNumber(12345)); // 54321
console.log(reversedNumber(12213)); // 31221
console.log(reversedNumber(456));   // 654
console.log(reversedNumber(12000)); // 21 # Note that zeros get dropped!
console.log(reversedNumber(1));     // 1