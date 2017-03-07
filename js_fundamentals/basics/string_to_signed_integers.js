var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(str) {
  var input = str;
  var negative = false;
  var numbers = stringToNumbers(input);
  var value = 0;

  if (input[0] === '+') {
    input = input.slice(1);
  } else if (input[0] === '-') {
    negative = true;
    input = input.slice(1);
  }

  for (var j = 0; j < numbers.length; j++) {
    value = 10 * value + numbers[j];
  }

  if (negative) {
    value = -value;
  }

  return(value);
}

function stringToNumbers(str) {
  var result = [];

  for (var i = 0; i < str.length; i++) {
    result.push(DIGITS[str[i]]);
  }

  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100