// Program to print "Happy New Year!" without using string literals

// ASCII values for the characters in "Happy New Year!"
const asciiValues = [72, 97, 112, 112, 121, 32, 78, 101, 119, 32, 89, 101, 97, 114, 33];

// Convert ASCII values to characters and join them to form the string
const resultString = String.fromCharCode(...asciiValues);

// Print the result
console.log(resultString);
