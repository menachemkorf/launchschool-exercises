function staggeredCase(string) {
  var counter = 0;
  return string.split('').map(function(char, index) {
    if (char.match(/[a-z]/i)) {
      counter++;
      if (counter % 2 === 1) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));     // 'I lOvE lAuNcH sChOoL!'
console.log(staggeredCase('ALL CAPS'));                  // 'AlL cApS'
console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 nUmBeRs'
