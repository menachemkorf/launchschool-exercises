var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(str) {
  var numbers = stringToNumbers(str);
  var value = 0;

  for (var j = 0; j < numbers.length; j++) {
    value = 10 * value + numbers[j];
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


console.log(stringToInteger('4321'));          // 4321
console.log(stringToInteger('570'));           // 570