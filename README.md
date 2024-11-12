# Caesar Cipher with Enhanced Complexity

This project implements a Caesar Cipher encryption and decryption system with additional complexity. It adds alternating shift directions (forward and backward) for each letter and inserts random letters into the message to increase its complexity.

## Features
- Alternating letter shifts (forward and backward)
- Random letter insertion after every two characters to increase complexity
- Functions for both encryption and decryption of messages
- Reverses the added complexity during decryption to retrieve the original message

## Technologies Used
- JavaScript

## How It Works
The cipher shifts each letter of the message either forward or backward in the alphabet, alternating between the two directions for each letter. Every two letters in the message, a random letter is inserted to make the cipher harder to break. The decryption process reverses these steps to retrieve the original message.

### Encryption:
1. Each letter is alternately shifted forwards or backwards.
2. After every two letters, a random letter is inserted to increase complexity.

### Decryption:
1. The process reverses the alternating shifts.
2. Skips over every third letter (the random insertions during encryption).

## Example
**Encryption**:
- Input: `hello`
- Output: `ifmmp`

**Decryption**:
- Input: `ifmmp`
- Output: `hello`

## Getting Started
To run this project:
1. Clone the repository to your local machine.
2. Run the `app.js` file in any JavaScript environment (Node.js recommended).
3. Use the provided functions to encrypt or decrypt a message.

## Files
- `app.js`: Contains the core logic for encrypting and decrypting messages.

## License
This project is licensed under the MIT License.
