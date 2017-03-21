// Write a function that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. You may assume that the Array always contains at least one number.

// Input: array of numbers
// Output: number - sum of sums of each leading subsequence
//  given an array [3, 5, 2] // return (3) + (3 + 5) + (3 + 5 + 2)

// Algorithm:
//  itirate over the array
//    for each step slice from the begining of the array till the current step
//    reduce the sum of the slice
//    add it to a 'sums' array
//  reduce the sum of the 'sums' array

function sumOfSums(values) {
  var sums = [];

  values.forEach(function(value, index, array) {
    sums.push(array.slice(0, index + 1).reduce(function(sum, currentValue) {
      return sum + currentValue;
    }));
  });

  return sums.reduce(function(total, currentSum) {
    return total + currentSum;
  })
}




console.log(sumOfSums([3, 5, 2]) );      // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
console.log(sumOfSums([1, 5, 7, 3]));    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
console.log(sumOfSums([4]));             // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35