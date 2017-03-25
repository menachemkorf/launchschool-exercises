function removeVowels(array) {
  return array.map(function(string) {
    return string.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));             // ['bcdfghjklmnpqrstvwxyz']
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));      // ['grn', 'YLLW', 'blck', 'wht']
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                    // ['BC', '', 'XYZ']
