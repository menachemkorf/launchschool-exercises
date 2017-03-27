// A triangle is classified as follows:

// Right: One angle of the triangle is a right angle (90 degrees)
// Acute: All 3 angles of the triangle are less than 90 degrees
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and all angles must be greater than 0. If either of these conditions are not satisfied, the triangle is invalid.

// Write a function that takes the 3 angles of a triangle as arguments, and returns a string 'right', 'acute', 'obtuse', or 'invalid' depending on whether the triangle is a right, acute, obtuse, or invalid triangle.

// You may assume integer valued angles so you don't have to worry about floating point errors. You may also assume that the arguments are in degrees.

// invalid:
//    sum === 180
//    each angle > 0
// Right:
//    one angle === 90
// Acute:
//    each angle < 90 (max)
// Obtuse:
//    one angle > 90 (max)

function triangle(angle1, angle2, angle3) {
  var angles = [angle1, angle2, angle3].sort(function(a, b) {
    return a - b;
  });

  if (angles[0] <= 0 || angles.reduce(function(total, current) {
    return total + current;
  }) !== 180) {
    return 'invalid';
  }

  if (angles.some(function(angle) {
    return angle === 90;
  })) {
    return 'right';
  }

  if (angles[2] < 90) {
    return 'acute';
  }

  if (angles[2] > 90) {
    return 'obtuse';
  }
}


console.log(triangle(60, 70, 50));   // acute
console.log(triangle(30, 90, 60));   // right
console.log(triangle(120, 50, 10));  // obtuse
console.log(triangle(0, 90, 90));    // invalid
console.log(triangle(50, 50, 50));   // invalid