function bubbleSort(array) {
  var temp;
  var swapped;

  for (var round = 0; round < array.length; round++) {
    swapped = false
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    if (!swapped) {
      break;
    }
  }
}



var array = [5, 3];
bubbleSort(array);
console.log(array);     // [3, 5]

array = [6, 2, 7, 1, 4]
bubbleSort(array);
console.log(array);     // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
