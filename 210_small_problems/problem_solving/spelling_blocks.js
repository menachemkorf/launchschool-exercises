// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to just those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word as a string, and returns true if it can spell the argument passed in from the set of blocks, false otherwise. You can consider the letters to be case insensitive when you apply the rules.

// Input: word as string
// Output: boolean, true if it matches the rules, flase otherwise
// Rules:
//    ignore non-alphabet???
//    each block can only be represented once in the word:
//      A word can't have two letters from the same block, and
//      a word can't have duplicate letters
//    spelling blocks each have two letters in them [B, O], [X, K] etc
//      the list of spelling blocks cover all the alphabet
//    case insensitive, so (b, B, o, O) are all in the block [B, O]

// Data structure:
//    spelling blocks: nested arrays, [[B, O], [X, K] ...]
//      for each letter in the given word we need to check in which block it's found.
//      so we need to group each block somehow - by its index in the array
//    keeping track of used blocks: array of integers
//      representing the index of the block already used
//    input: string with extra characters removed, to uppercase

// Algorithm:
//    set spelling-blocks array
//    set used-blocks-index array

//    remove non-letters with regex, and convert to uppercase
//    for each letter in the word
//      find the index in the spelling-blocks array using array.some() on that sub-array
//        check if index already exists in the used-blocks array using array.some()
//          return false
//        store the index in the used-blocks array
//    return true at end of loop

function isBlockWord(word) {
  var spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                        ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'],
                        ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  var usedBlocks = [];
  var blockIndex;

  word = word.replace(/[^a-z]/gi, '').toUpperCase();

  for (var i = 0; i < word.length; i++) {

    blockIndex = spellingBlocks.findIndex(function(block, index) {
      return block.some(function(letter) {
        return word[i] === letter;
      });
    });

    if (usedBlocks.some(function(element) {
      return element === blockIndex;
    })) {
      return false;
    }

    usedBlocks.push(blockIndex);
  }

  return true;
}

console.log(isBlockWord('a')); // true

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true
console.log(isBlockWord('apPLE'));  // false
console.log(isBlockWord('Box'));  // false
console.log(isBlockWord('je7!st'));  // true


