// Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// Input: positive number
// Output: number - sum of all the digits (23 = 5)

// Algorithm:
//  convert the input to a string
//  split the string into an array of chars
//  map the array into numbers
//  reduce the sum of the array

function sum(number) {
  return String(number).split('').map(Number).reduce(function(sum, currentValue) {
    return sum + currentValue;
  });
}

console.log(sum(23));          // 5
console.log(sum(496));         // 19
console.log(sum(123456789));   // 45