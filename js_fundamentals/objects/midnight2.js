var MINUTES_PER_HOUR = 60;

function afterMidnight(timeStr) {
  var hours = Number(timeStr.split(':')[0]);
  var minutes = Number(timeStr.split(':')[1]);

  var time = new Date(2000, 1, 1, hours, minutes);

  var totalMinutes = (time.getHours() * MINUTES_PER_HOUR) + time.getMinutes();
  return totalMinutes;
}

function beforeMidnight(timeStr) {
  var hours = Number(timeStr.split(':')[0]);
  var minutes = Number(timeStr.split(':')[1]);

  var time = new Date('1/1/2000 00:00');

  time.setHours(time.getHours() - hours);
  time.setMinutes(time.getMinutes() - minutes);

  var totalMinutes = (time.getHours() * MINUTES_PER_HOUR) + time.getMinutes();
  return totalMinutes;
}


console.log(afterMidnight('00:00'));        // 0
console.log(beforeMidnight('00:00'));       // 0
console.log(afterMidnight('12:34'));        // 754
console.log(beforeMidnight('12:34'));       // 686