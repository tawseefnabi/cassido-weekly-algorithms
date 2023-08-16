// This week's (Aug 14 2023 question:
// You have a faulty keyboard. Whenever you type a vowel on it (a,e,i,o,u,y), it reverses the string that you have written, instead of typing the character. Typing other characters works as expected. Given a string, return what will be on the screen after typing with your faulty keyboard.

// Example:

// > faultyKeeb('string')
// > 'rtsng'

// > faultyKeeb('hello world!')
// > 'w hllrld!'

const VOWELS = ["a", "e", "i", "o", "u", "y"]
const faultyKeeb = (word) => {
    var faultyString = ""
    for (let chr of word){
      if(VOWELS.includes(chr)){
        faultyString =  faultyString.split("").reverse().join("")
        
      } else{
        faultyString +=chr
      }
    }
    return faultyString
}
function reverseString(str){
  return str.split("").reverse().join("")
}

console.log(faultyKeeb('hello world!'))
console.log(faultyKeeb('string'))
console.log(faultyKeeb('programming'))
console.log(faultyKeeb('cassidoo'))