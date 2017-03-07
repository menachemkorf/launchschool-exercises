var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  var result = '';

  result += DIGITS[num % 10];

  console.log(result);

  result = (num % 100) - (num % 10) - ;
  console.log(result);
}


console.log(integerToString(4321));    // "4321"
console.log(integerToString(0));       // "0"
console.log(integerToString(5000));    // "5000"