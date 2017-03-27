// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// square = Math.pow(number, 2)

// Input: number
// Output: number
// calculate the square (of the sum of all numbers from 1 till `number`)
//                       (sum of 3 => 6 (1+2+3))
// calculate the sum (of all of the squares of each number from 1 till `number`)
// return squareSum - sumSquare

function sumSquareDifference(number) {
  var sum = 0;
  var sumOfSquares = 0;

  for (var i = 1; i <= number; i++) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}



console.log(sumSquareDifference(3));    // 22
// -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));   // 2640
console.log(sumSquareDifference(1));    // 0
console.log(sumSquareDifference(100));  // 25164150