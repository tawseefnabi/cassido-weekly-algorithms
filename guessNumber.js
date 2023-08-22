// Make a "guessing game" where there is a target number, 
// and as the user makes guesses, the output returns higher or lower until the user is correct.
const prompt = require("prompt-sync")()

guessNumber = () =>{
  let maxGuessess = 10
  let guessCount = 0
  let guess = Math.floor(Math.random()*100) +1
  // generate random number  
  let num = prompt("Guess number between 1 to 100: ")
  while(guessCount<maxGuessess ){
      if(num>guess){
        console.log(`Your ${num} is too high, Please enter lower and your guess count is ${guessCount}`);
        guessCount++
        num = prompt("Guess number between 1 to 100: ")
      } else if(num <guess){
        console.log(`Your ${num} is too low , Please enter lower and your guess count is ${guessCount}`);
        guessCount++ 
        num = prompt("Guess number between 1 to 100: ")
      } 
  } 
  console.log(`Sorry you have exceeded all ${maxGuessess} guessess. Guess numbers is  ${guess}`);  
  
}
guessNumber();