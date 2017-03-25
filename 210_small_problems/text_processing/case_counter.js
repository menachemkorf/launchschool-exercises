function letterCaseCount(string) {
  var uppercaseArray = string.match(/[A-Z]/g) || [];
  var lowercaseArray = string.match(/[a-z]/g) || [];
  var neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    uppercase: uppercaseArray.length,
    lowercase: lowercaseArray.length,
    neither: neitherArray.length
  };
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));   // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));        // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));           // { lowercase: 0, uppercase: 0, neither: 0 }
