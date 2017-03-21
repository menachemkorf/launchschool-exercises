// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Algorithm:
//  for each char
//  get substringsAtStart passing in a string slice from current string to end
//  concat it to the result array

function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index, array) {
    return array.slice(0, index + 1).join('');
  });
}

function substrings(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result = result.concat(substringsAtStart(string.slice(i)));
  }

  return result;
}

console.log(substrings('abcde'));
// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]
