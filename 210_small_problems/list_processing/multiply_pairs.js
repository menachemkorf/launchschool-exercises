// Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers that between the elements of the two Arrays. Sort the results in increasing value.

// You may assume that neither argument is an empty Array.

// Input: two arrays, where each array is a set one or more numbers
// output: array of numbers
//  the product of each number of the first array -
//  multiplied by each number of the second array
//  given the arrays [2], [4, 6] the output will be an array with the result of [2*4, 2*6]
//  return the sorted result

// Algorithm:
//  loop through the first array
//    on each step loop through the second array
//      multiply the current step of the first array with the current step of the  second array
//      add it to the result array
//  return the sorted result array

function multiplyAllPairs(set1, set2) {
  var result = [];
  set1.forEach(function(value1) {
    set2.forEach(function(value2) {
      result.push(value1 * value2);
    });
  });

  return result.sort(function(a, b) {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]


