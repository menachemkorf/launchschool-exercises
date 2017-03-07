function reverse(inputForReversal) {
  var result;
  var newArray = inputForReversal.slice();

  if (typeof inputForReversal === 'string') {
    result = '';
    for (var i = inputForReversal.length - 1; i >= 0; i--) {
      result += inputForReversal[i];
    }
  } else {
    result = [];
    while (newArray.length) {
      result.push(newArray.pop());
    }
  }

  return result;
}

console.log(reverse('Hello'));          // olleH
console.log(reverse('a'));              // a
console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
console.log(reverse([]));               // []