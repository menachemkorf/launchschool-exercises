var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = afterMidnight.getHours();
  var minutes = afterMidnight.getMinutes();

  return paddZero(hours) + ':' + paddZero(minutes);
}

function paddZero(num) {
  if (String(num).length === 2) {
    return String(num);
  } else {
    return '0' + String(num);
  }
}

console.log(timeOfDay(0));       // "00:00"
console.log(timeOfDay(-3));      // "23:57"
console.log(timeOfDay(35));      // "00:35"
console.log(timeOfDay(-1437));   // "00:03"
console.log(timeOfDay(3000));    // "02:00"
console.log(timeOfDay(800));     // "13:20"
console.log(timeOfDay(-4231));   // "01:29"