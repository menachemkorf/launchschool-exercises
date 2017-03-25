// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.0
// The total is $230.0

var bill = Number(prompt('What is the bill?'));
var tipPercentage = Number(prompt('What is the tip percentage?'));
var tipAmount = tipPercentage / 100 * bill;

console.log('The tip is $' + tipAmount.toFixed(1));
console.log('The total is $' + (tipAmount + bill).toFixed(1));
