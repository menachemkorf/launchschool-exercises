// Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + (counter * rate)); // 15

function counter(count) {
  // ...
}

// Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate)); // NaN

var counter = 5;
var rate = 3;

// Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate)); // 15