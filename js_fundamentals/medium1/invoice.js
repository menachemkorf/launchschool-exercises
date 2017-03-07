function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

// Refactored

function invoiceTotal() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

invoiceTotal(20, 30, 40, 50);             // works
(20, 30, 40, 50, 40, 40);     // doesn't work; how can you make it work?

