function shift(arr) {
  if (!arr.length) {
    return undefined;
  }

  var shiftedElemet = arr[0];

  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1;
  return shiftedElemet;
}

function unshift(arr) {
  var len;
  for (var i = 1; i < arguments.length; i++) {
   len = arr.length;

    for (var j = len; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = arguments[i];
  }

  return arr.length;
}


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4 ,5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2 ,3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]