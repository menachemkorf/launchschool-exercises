// A triangle is classified as follows:

// Equilateral: All 3 sides are of equal length
// Isosceles: 2 sides are of equal length, while the 3rd is different
// Scalene: All 3 sides are of different length
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and all sides must have lengths greater than 0. If either of these conditions are not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the 3 sides of a triangle as arguments, and returns a string 'equilateral', 'isosceles', 'scalene', or 'invalid' depending on whether the triangle is equilateral, isosceles, scalene, or invalid.


// Input: three numbers representing three lengths of the sides of a triangle
// Output: string, representing what type of triangle it is based on the set of rules:
// Rules:
//    invalid:
//        all sides need a length of more then 0
//        the length of the two shorter sides combined is longer then the longest side
//    equilateral:
//        all three sides are of equal length
//    isosceles:
//        two sides are of equal length, while the third is different
//        (but it's not an invalid triangle)
//    scalene:
//        all sides are of different lengths
//        (but it's not an invalid triangle)

// Algorithm:
//    convert args into sorted array
//    if arr[2] >= arr[0] + arr[1] || args[0] <= 0
//        return 'invalid'
//    else if arg1 === arg2 === arg3
//        return 'equilateral'
//    else if arr[1] === arr[0] || arr[1] === arr[2]
//        return 'isosceles'
//    else
//        return 'scalene'

function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort(function(a, b) {
    return a - b;
  });

  if (sides[0] <= 0 || sides[2] >= sides[0] + sides[1]) {
    return 'invalid';
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}



console.log(triangle(3, 3, 3));  // equilateral
console.log(triangle(3, 3, 1.5)); // isosceles
console.log(triangle(3, 4, 5));  // scalene
console.log(triangle(0, 3, 3));  // invalid
console.log(triangle(3, 1, 1));  // invalid