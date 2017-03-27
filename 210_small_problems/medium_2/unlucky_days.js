// Write a function that returns the number of Friday the 13ths in the year passed in as an argument. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom), and you may assume that the same calendar will remain in use for the foreseeable future.

// Input: number ,year
// Output: number of occurrences that friday comes out on the 13th of the month
//    foreach month check what day of the week the 13th came out on
//    keep track how many of them are fridays (reduce)

// Algorithm:
//    result = 0
//    iterate 12 times
//      - on each step create a new date
//                    with the input year and
//                    the current step as month,
//                    and 13 as date
//                    `new Date(year, month, date)`
//      - check day of week, if friday
//          result += 1
//    return result

function fridayThe13ths(year) {
  var thirteenth;
  var count = 0
  for (var i = 0; i < 12; i++) {
    thirteenth = new Date(year, i, 13);
    if (thirteenth.getDay() === 5) {
      count += 1;
    };
  }

  return count;
}


console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(1986)); // 1
