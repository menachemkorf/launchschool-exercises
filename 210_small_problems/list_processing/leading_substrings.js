// Write a function that returns a list of all substrings of a string that start at the beginning of the original string. It returns the substrings arranged from shortest to longest.

// Input: string
// Output: array of strings
//  given a string get all leading substrings
//  a leading substring is a substring that begins at the begining of the string
//  given the string 'abc'  we need all substrings that start with the 'a'
//  ['a', 'ab', 'abc']

// Data strucure
//  array, we need to convert every letter to all letters from begining up until that letter
// index matters, and we need map

// Algorithm:
//  split the string to an array of chars
//  map each element into a string of all the chars from begining tll the current index + 1

function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index, array) {
    return array.slice(0, index + 1).join('');
  });
}


console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
console.log(substringsAtStart('a'));     // ['a']
console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']