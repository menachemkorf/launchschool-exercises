// Building on the previous exercise, write a function the returns whether an item is available. As before, the function takes in two arguments: inventoryItem and transactions. The function will return true only if the sum of the quantity for the transactions for the item is greater than zero. Notice that in the transaction object there is a movement property. Every time the movement value is out it decreases the quantity.

// Input: number id, array of transactions
// Output: boolean if that item is available
//  rules: for every transaction movement 'in': add the quantity
//         for every transaction movement 'out': subtract the quantity

// Algorithm:
//  reduce transactionsFor(id)
//    if movement === 'in'
//      quantity += quantity
//    if movement === 'out'
//      quantity -= quantity
//  return quantity > 0

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

function transactionsFor(id, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === id;
  });
}

function isItemAvailable(id, transactions) {
  var quantityIn = transactionsFor(id, transactions).filter(function(transaction) {
    return transaction.movement === 'in';
  }).map(function(transaction) {
    return transaction.quantity;
  }).reduce(function(sum, quantity) {
    return sum + quantity;
  }, 0);

  var quantityOut = transactionsFor(id, transactions).filter(function(transaction) {
    return transaction.movement === 'out';
  }).map(function(transaction) {
    return transaction.quantity;
  }).reduce(function(sum, quantity) {
    return sum + quantity;
  }, 0);

  // return quantityIn.reduce(function(sum, quantity) {
  //   return sum + quantity;
  // })
  return quantityIn - quantityOut > 0;

}





console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true