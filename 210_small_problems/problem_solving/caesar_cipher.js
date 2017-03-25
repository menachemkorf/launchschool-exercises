// Implement the caesar cipher. The caesar cipher is one of the earliest and simplest ways to encrypt plaintext so that passing or communicating a message can be made secure. It is a substitution type of cipher, wherein the characters in a plaintext are substituted by a letter some fixed number of positions in the alphabet. For example the letter A can be right shifted 3 and it will be substituted with the letter D. This shift value is often referred to as the key. If a person has this key value then they can decode the "encrypted plaintext" or ciphertext.

// As one of the earlier ciphers, it only encrypts lower and upper cased letters of the alphabet. Any other character is left as is. Likewise, the substituted letters are only taken from the corresponding letter case. In the event that the key value for shifting exceeds the alphabet capacity, it wraps around.

// Input: `plaintext` as string, `key` as number
// Output: `ciphertext` as string, the encrypted version of `plaintext`
// Rules:
//  - substiute each letter in the `plaintext` with the letter that is 'key' positions to
//    the right in the dictionary from the current letter
//      - 'a' would be position 0, while 'd' is position 3
//      - plaintextPosition + key === ciphertextPosition
//      - 'd' is 3 positions to the right of 'a'
//      - given the input (a, 3) the result should be d
//  - shifting wraps around when we reach the end of the alphabet
//      - given the input ('z', 1) => 'a', ('y', 3) => 'b'
//      - if plaintextPosition + key > dictionary.length
//        then ciphertextPosition == (plaintextPosition + key) - dictionary.length
//  - keep the case
//      - 'a' => 'd', while 'A', => 'D'
//  - leave any non alphabetic the way it is
//      - don't remove it, but don't change it
//      - 'a!.5' => 'd!.5'
//
// Mental model:
//  - map each char with encryptChar(char, key), that returns the encrypted version for
//    the given char
//  - encryptChar(char, key)
//      - if not a letter return char
//      - check position of letter, and get position + key
//      - if position + key < hash.length, return letter at position + key
//      - else return letter at (position + key) - hash.length

// Algorithm:
// create hash containing all the alphabet


//  split plaintext into array of chars
//  map plaintextArray into the result of encryptChar(char, key)
//  return plaintext as joined string

//  encryptChar(char, key)
//    keep track if isUppercase
//  find index of lowercase char in alphabet hash
//  get index of index + key as encryptIndex
//  if encryptIndex > hash.length
//    encryptIndex -= hash.length
//  if isUppercase
//    return hash[encryptIndex].toUpperCase()
//  else
//    return hash[encryptIndex]

var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var ALPHABET = ['abcdefghijklmnopqrstuvwxyz'];
function encryptChar(char, key) {
  if (char.match(/[^a-z]/i)) {
    return char;
  }

  var isUpperCase = char === char.toUpperCase();
  var plaintextPosition = ALPHABET.indexOf(char.toLowerCase());
  var encryptedPosition = plaintextPosition + key;

  if (encryptedPosition >= ALPHABET.length) {
    encryptedPosition -= ALPHABET.length;
  }

  var encryptedLetter = ALPHABET[encryptedPosition];
  return isUpperCase ? encryptedLetter.toUpperCase() : encryptedLetter;
}

function caesarEncrypt(plaintext, key) {
  var plaintextArray = plaintext.split('');
  return plaintextArray.map(function(char) {
    return encryptChar(char, key);
  }).join('');
}



// Simple shift
console.log(caesarEncrypt('A', 0));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'
console.log(caesarEncrypt('a', 3));       // 'd'
console.log(caesarEncrypt('b', 3));       // 'e'


// Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// ZABCDEFGHIJKLMNOPQRSTUVWXY
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?