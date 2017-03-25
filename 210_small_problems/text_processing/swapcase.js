function swapcase(string) {
  return string.split('').map(function(char) {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(swapcase('CamelCase'));         // 'cAMELcASE'
console.log(swapcase('Tonight on XYZ-TV')); // 'tONIGHT ON xyz-tv'