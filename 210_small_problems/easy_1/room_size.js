var lengthMeters = prompt('Enter the length of the room in meters:');
var widthMeters = prompt('Enter the width of the room in meters:');

var areaMeters = Number(lengthMeters) * Number(widthMeters);
var areaFeet = areaMeters * 10.7639;

console.log('The area of the room is ' + areaMeters.toFixed(1) + ' square meters (' + areaFeet.toFixed(2) + ' square feet).');