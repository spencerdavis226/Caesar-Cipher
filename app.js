// Caesar Cipher Encryption and Decryption with Enhanced Complexity

// This program implements a Caesar Cipher with additional features:
// 	•	Alternating shift directions (forward and backward) for each letter
// 	•	Random letter insertion after every two letters to increase complexity
// The program includes functions to encrypt and decrypt messages, reversing the added complexity to retrieve the original message.

// Attribution:
// 	•	Code developed primarily by Spencer Davis.
// 	•	Received guidance from an AI assistant for debugging, clarifying logic (particularly with random letter insertion/extraction), and organizing comments. The AI also provided support in understanding certain syntax concepts, though they were not directly used in this code.

// Functions:
// 	•	encryptLetterForwards: Shifts a letter forward by the specified shift value.
// 	•	encryptLetterBackwards: Shifts a letter backward by the specified shift value.
// 	•	randomLetter: Generates a random letter from the alphabet.
// 	•	encrypt: Encrypts a full message with alternating shifts and random letter insertion.
// 	•	decryptLetterForwards: Reverses a forward shift for decryption.
// 	•	decryptLetterBackwards: Reverses a backward shift for decryption.
// 	•	decrypt: Decrypts an encrypted message, ignoring random letters and reversing shifts.

// Extra Credit:
// 	•	The code alternates shift directions between forward and backward for each letter, and successfully decrypts to retrieve the original text.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Encrypts a letter by shifting it forward in the alphabet
// Renamed function to "encryptLetterForwards" for extra credit
function encryptLetterForwards(letter, shiftValue) {
  // 1. Convert letter to lowercase for consistent comparison
  const cleanedLetter = letter.toLowerCase();
  // 2. Get current index of the letter in the alphabet
  const startIndex = alphabet.indexOf(cleanedLetter);
  // 3. Calculate new index after adding shift, with alphabet wrapping
  const newIndex = (startIndex + shiftValue) % alphabet.length;
  // 4. Return the encrypted letter at the new index
  return alphabet[newIndex];
}

// Encrypts a letter by shifting it backward in the alphabet
function encryptLetterBackwards(letter, shiftValue) {
  // 1. Convert letter to lowercase for consistent comparison
  const cleanedLetter = letter.toLowerCase();
  // 2. Get current index of the letter in the alphabet
  const startIndex = alphabet.indexOf(cleanedLetter);
  // 3. Calculate new index after subtracting shift, with alphabet wrapping
  const newIndex =
    (startIndex - shiftValue + alphabet.length * shiftValue) % alphabet.length;
  // 4. Return the encrypted letter at the new index
  return alphabet[newIndex];
}

// Generates a random letter from the alphabet to be used in encryption
function randomLetter() {
  // 1. Generate a random index within the alphabet length
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  // 2. Return the letter at the random index
  return alphabet[randomIndex];
}

// Encrypts an entire message using Caesar Cipher with added complexity
// Steps:
// 1. Shift letters forward or backward alternately
// 2. After every two letters, insert a random letter from the alphabet
function encrypt(message, shiftValue) {
  let encryptedMessage = ''; // Holds the resulting encrypted string
  let letterCount = 0; // Tracks the number of letters processed in pairs

  // Process each letter in the message
  for (let letter of message) {
    // If character is not in the alphabet, add it as is
    if (alphabet.indexOf(letter.toLowerCase()) === -1) {
      encryptedMessage += letter;
    } else if (letter === letter.toUpperCase()) {
      // Handle uppercase letters
      if (letterCount === 0) {
        encryptedMessage += encryptLetterForwards(
          letter,
          shiftValue
        ).toUpperCase();
        letterCount++;
      } else {
        encryptedMessage += encryptLetterBackwards(
          letter,
          shiftValue
        ).toUpperCase();
        letterCount++;
      }
    } else {
      // Handle lowercase letters
      if (letterCount === 0) {
        encryptedMessage += encryptLetterForwards(letter, shiftValue);
        letterCount++;
      } else {
        encryptedMessage += encryptLetterBackwards(letter, shiftValue);
        letterCount++;
      }
    }

    // After every two letters, add a random letter and reset the count
    if (letterCount === 2) {
      encryptedMessage += randomLetter();
      letterCount = 0;
    }
  }
  return encryptedMessage;
}

// Decrypts a letter that was shifted forward during encryption
function decryptLetterForwards(letter, shiftValue) {
  // 1. Convert letter to lowercase for consistent comparison
  const cleanedLetter = letter.toLowerCase();
  // 2. Get current index of the letter in the alphabet
  const startIndex = alphabet.indexOf(cleanedLetter);
  // 3. Calculate original index by reversing the forward shift
  const newIndex =
    (startIndex - shiftValue + alphabet.length * shiftValue) % alphabet.length;
  // 4. Return the decrypted letter at the original index
  return alphabet[newIndex];
}

// Decrypts a letter that was shifted backward during encryption
function decryptLetterBackwards(letter, shiftValue) {
  // 1. Convert letter to lowercase for consistent comparison
  const cleanedLetter = letter.toLowerCase();
  // 2. Get current index of the letter in the alphabet
  const startIndex = alphabet.indexOf(cleanedLetter);
  // 3. Calculate original index by reversing the backward shift
  const newIndex =
    (startIndex + shiftValue + alphabet.length * shiftValue) % alphabet.length;
  // 4. Return the decrypted letter at the original index
  return alphabet[newIndex];
}

// Decrypts an entire message by reversing the encryption process
// Steps:
// 1. Reverse the alternate shifting pattern used in encryption
// 2. Skip over every third letter (the randomly inserted letters)
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = ''; // Holds the resulting decrypted string
  let letterCount = 0; // Tracks real letters to skip random ones

  // Process each letter in the encrypted message
  for (let letter of encryptedMessage) {
    // Skip every third letter (inserted randomly during encryption)
    if (letterCount === 2) {
      letterCount = 0;
      continue;
    }

    // If character is not in the alphabet, add it as is
    if (alphabet.indexOf(letter.toLowerCase()) === -1) {
      decryptedMessage += letter;
    } else if (letter === letter.toUpperCase()) {
      // Handle uppercase letters
      if (letterCount === 0) {
        decryptedMessage += decryptLetterForwards(
          letter,
          shiftValue
        ).toUpperCase();
        letterCount++;
      } else {
        decryptedMessage += decryptLetterBackwards(
          letter,
          shiftValue
        ).toUpperCase();
        letterCount++;
      }
    } else {
      // Handle lowercase letters
      if (letterCount === 0) {
        decryptedMessage += decryptLetterForwards(letter, shiftValue);
        letterCount++;
      } else {
        decryptedMessage += decryptLetterBackwards(letter, shiftValue);
        letterCount++;
      }
    }
  }

  return decryptedMessage;
}
