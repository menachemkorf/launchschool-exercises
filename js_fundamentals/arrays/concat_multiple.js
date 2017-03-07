function concat(array1) {
  var newArray = array1.slice();

  for (var i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (var j = 0; j < arguments[i].length; j++) {
        newArray.push(arguments[i][j]);
      }
    } else {
      newArray.push(arguments[i]);
    }
  }

  return newArray;
}

console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(concat([1, 2], "a", ["one", "two"]));               // [ 1, 2, "a", "one", "two" ]
console.log(concat([1, 2], ["three"], 4));                      // [ 1, 2, "three", 4 ]