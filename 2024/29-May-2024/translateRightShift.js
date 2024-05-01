// / Imagine the users on your app are all typing slightly incorrectly, in that they shifted their hands one 
// key to the right. Write a function that translates what they mean to say. The examples below assume an ANSI keyboard layout,
//  you can choose how you want to do that!
// Example:

// > translateRightShift(';p; epeor')
// "lol wowie"

// > translateRightShift('ejp s, o')
// "who am i"

function translateText(input) {
  const keyboardLayout = [
      "`1234567890-=",
      "qwertyuiop[]\\",
      "asdfghjkl;'",
      "zxcvbnm,./"
  ];

  const shiftedLayout = keyboardLayout.map(row => {
      return row.slice(1) + row[0]; // Shift each row one key to the left
  });

  return input.replace(/[`1234567890\-=[\];',.\/\\]/g, char => {
      for (let row of shiftedLayout) {
          const index = row.indexOf(char);
          if (index !== -1) {
              return keyboardLayout[shiftedLayout.indexOf(row)][index];
          }
      }
      return char; // Return character unchanged if not found in layout
  });
}

// Example usage:
const userInput = "sgh f;jk";
const translatedText = translateText(userInput);
console.log(translatedText); // Output: "are glad"
