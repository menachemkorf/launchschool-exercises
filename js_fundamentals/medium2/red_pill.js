// function one() {
//   function log(result) {
//     console.log(result);
//   }

//   function anotherOne() {
//     var result = '';
//     for (var i = 0; i < arguments.length; i++) {
//       result += String.fromCharCode(arguments[i]);
//     }

//     log(result); // 'to ' // 'the '
//   }

//   function anotherAnotherOne() {
//     console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32)); // 'Welcome '
//     anotherOne(116, 111, 32);
//   }

//   anotherAnotherOne();
//   anotherOne(116, 104, 101, 32);
//   return anotherOne;
// }

// one()(77, 97, 116, 114, 105, 120, 33); // 'Matrix!'

function isEmpty(value) {
  var type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;

  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

console.log(isEmpty({}));                 // true
console.log(isEmpty({ name: 'Janice' })); // false

console.log(isEmpty(''));                 // true
console.log(isEmpty('Janice'));           // false

console.log(isEmpty([]));                 // should return true
console.log(isEmpty(['Janice']));         // should return false

var arr = [];
arr['rr'] = 'jj';
console.log(isEmpty(arr));
