// You have a bank of switches before you, numbered from 1 to n. Each switch is connected to exactly one light that is initially off. You walk down the row of switches, and toggle every one of them. You go back to the beginning, and on this second pass you toggle switches 2, 4, 6, and so on. On the third pass, you go back again to the beginning and toggle switches 3, 6, 9, and so on. You repeat this process and keep going until you have been through n repetitions.

// Write a program that takes one argument, total number of switches, and returns an array of lights that are on after n repetitions.

// Input: number
// Output: array of numbers representing the switches that are left on
//  initialize an array of n switches
//  iterate over all the switches n times
//    at each iteration toggle every nth switch based on which iteration your on:
//      for iteration number 1 toggle every switch,
//      for iteration number 2 toggle every 2nd switch etc.
//  return an array representing the switches that are left on

// Data structure:
//  switches: array

// Algorithm:
//  initialize array with the length of the given number,
//  set each element to false
//  loop the given number times, using for loop, with var i
//    for each step use another for loop, with var j += i
//      for each step isLightOn = !isLightOn;
//  return the filtered switches array where isLightOn === true;

// 3
// Round 1: [(1), (2), (3)]
// Round 2: [(1), 2, (3)]
// Round 3: [(1), 2, 3]



function initializeSwitches(count) {
  var lights = [];
  for (var i = 0; i < count; i++) {
    lights.push(false);
  }

  return lights;
}

function lightsOn(switches) {
  var lights = initializeSwitches(switches);

  for (var round = 1; round <= switches; round++) {
    for (var lightSwitch = round - 1; lightSwitch < switches; lightSwitch += (round)) {
      lights[lightSwitch] = !lights[lightSwitch];
    }
  }

  return lights.map(function(light, index) {
    if (light) {
      return index + 1;
    }
  }).filter(function(light) {
    return light;
  });

  return lights;
}



console.log(lightsOn(3));   // [1, 2]
// [(1), (2), (3)]
// [(1), 2, (3)]
// [(1), 2, 3]
console.log(lightsOn(5));   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
