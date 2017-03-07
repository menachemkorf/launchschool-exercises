function slice(array, begin, end) {
  var newArray = [];

  end = end > array.length ? array.length : end;

  for (var i = begin; i < end; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));           // [2]
console.log(slice([1, 2, 3], 2, 0));           // []
console.log(slice([1, 2, 3], 5, 1));           // []

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                 // [2, 3]
console.log(arr);                              // [1, 2, 3]




function splice(array, start, deleteCount) {
  var newArray = [];

  if (deleteCount + start > array.length) {
    deleteCount = array.length - start;
  }

  // create array to return
  for (var i = start; i < start + deleteCount; i++) {
    newArray.push(array[i]);
  }

  // remove elements
  for (var j = start; j < array.length - deleteCount; j++) {
    array[j] = array[j + deleteCount];
  }

  array.length -= deleteCount;

  // add elements
  for (var k = arguments.length - 1; k >= 3; k--) {
    for (var l = array.length; l > start; l--) {
      array[l] = array[l - 1];
    }

    array[start] = arguments[k];
  }

  return newArray;
}

// console.log(splice([1, 2, 3], 1, 2));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));                   // []
// console.log(splice([1, 2, 3], 0, 1));                   // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));               // []

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));                  // [2]
// console.log(arr);                                       // [1, 'two', 3];

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
// console.log(arr);                                       // [1, "two", "three"]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                         // []
// console.log(splice(arr, 1, 0, 'a'));                    // []
// console.log(arr);                                       // [1, 'a', 2, 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));                    // []
// console.log(arr);                                       // ['a', 1, 2, 3]