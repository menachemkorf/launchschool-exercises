function buyFruit(list) {
  var result = [];
  list.forEach(function(product) {
    for (var i = 0; i < product[1]; i++) {
      result.push(product[0]);
    }
  });

  return result;
}



console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));
// result
// ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']