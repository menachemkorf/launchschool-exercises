

function substringsAtStart(string) {
  var chars = string.split('');
  return chars.map(function(char, index, array) {
    return array.slice(0, index + 1).join('');
  });
}

function substrings(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result = result.concat(substringsAtStart(string.slice(i)));
  }

  return result;
}

function palindromes(string) {
  return substrings(string).filter(function(substr) {
    return substr.length > 1 && substr === substr.split('').reverse().join('');
  });
}





console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // ['madam', 'ada']
console.log(palindromes('hello-madam-did-madam-goodbye'));
// result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  // 'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  // '-madam-', 'madam', 'ada', 'oo' ]

console.log(palindromes('knitting cassettes'));
// result
// [ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]
