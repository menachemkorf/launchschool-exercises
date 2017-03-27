// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, and whose digits occur exactly once each. So, for example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes a single integer as an argument, and returns the next featured number that is greater than the argument. Issue an error message if there is no next featured number.

// Input: number
// Output: number, first fetured number that is higher than the input
// Rules:
//  next number:
//
//  feture number:
//    odd number
//      number % 2 === 1
//    multiple of 7
//      number % 7 === 0
//    no duplicate digits
//      convert to string
//      check with regex if duplicate chars
//        /(\d)\d*\1/

// Data structure
//    input: number
//    rules: control flow (if else...)
//    use for loop to find next number

// Algorithm:
//    counter = input + 1
//    while true
//      if counter is odd &&
//         counter is a multiple of 7 &&
//         counter to strig doesnt have duplicate chars
//            return counter
//      else
//        counter++
//

function odd(number) {
  return number % 2 === 1;
}

function multipleOf7(number) {
  return number % 7 === 0;
}

function duplicateDigits(number) {
  var re = /(\d)\d*\1/
  return !!String(number).match(re)
}

function featured(number) {
  var fetureNumber = number + 1;

  while (true) {
    if (odd(fetureNumber) &&
        multipleOf7(fetureNumber) &&
        !duplicateDigits(fetureNumber)) {
      return fetureNumber;
    }

    fetureNumber++;
  }
}





console.log(featured(12));        // 21
console.log(featured(20));        // 21
console.log(featured(21));        // 35
console.log(featured(997));       // 1029
console.log(featured(1029));      // 1043
console.log(featured(999999));    // 1023547
console.log(featured(999999987)); // 1023456987
