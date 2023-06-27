// Code your solution here
function soup(phrase, characterBank) {
    // Convert the character bank to an array for easier manipulation
    const bankArray = characterBank.split('');
  
    // Loop through each character in the phrase
    for (let i = 0; i < phrase.length; i++) {
      const currentChar = phrase[i];
  
      // Check if the current character exists in the bank array
      const charIndex = bankArray.indexOf(currentChar);
      if (charIndex !== -1) {
        // Remove the character from the bank array
        bankArray.splice(charIndex, 1);
      } else {
        // If the character does not exist in the bank array, return false
        return false;
      }
    }
  
    // If all characters in the phrase have been found in the bank array, return true
    return true;
  }
  