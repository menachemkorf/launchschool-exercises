// Write a function that takes a string and then returns an object that contains 3 properties: one represents the percentage of characters in the string that are lowercase letters, one the percentage of characters that are uppercase letters, and one the percentage of characters that are neither.

// You may assume that the string will always contain at least one character.

// Input: string with at least one character
// Output: object with three properties
//    lowercase: percentage of lowercase chars in the input string
//    uppercase: percentage of uppercase chars in the input string
//    neither: percentage of all other chars in the input string

// Algorithm:
//  uppercaseCount is string.match(/[A-Z]/g)
//  same for all cases
//  convert count to percentage
//    count * 100 / string.length

function letterPercentages(string) {
  var lowercase = string.match(/[a-z]/g);
  var uppercase = string.match(/[A-Z]/g);
  var neither = string.match(/[^a-z]/gi);

  var lowercasePercentage = (lowercase && lowercase.length * 100 / string.length) || 0;
  var uppercasePercentage = (uppercase && uppercase.length * 100 / string.length) || 0;
  var neitherPercentage = (neither && neither.length * 100 / string.length) || 0;

  return {
    lowercase: lowercasePercentage.toFixed(2),
    uppercase: uppercasePercentage.toFixed(2),
    neither: neitherPercentage.toFixed(2)
  };
}

console.log(letterPercentages('abCdef 123')); // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
console.log(letterPercentages('AbCd +Ef'));   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
console.log(letterPercentages('123'));        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }