console.log(penultimate('last word'));               // 'last'
console.log(penultimate('Launch School is great!')); // 'is'

// function penultimate(string) {
//   arr = string.split(' ');
//   return arr[arr.length - 2];
// }

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}