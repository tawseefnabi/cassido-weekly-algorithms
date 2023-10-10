// Convert a number in English words to an integer. You can assume the number will never go beyond the millions, 
// and there will be no punctuation.

// parseNumber("Twelve Thousand Three Hundred Forty Five")
// > 12345

// > parseNumber("One Hundred Twenty Three")
// > 123

// https://buttondown.email/cassidoo/archive/all-great-achievements-require-time-maya-angelou/
const wordToNumMap: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
}
function parseNumber(englishWords:string): number {
  const words = englishWords.toLowerCase().split(' ');
  let result = 0;
  let currentNumber = 0;

  for (const word of words){
    const number = wordToNumMap[word]
    if (number === undefined) {
      return NaN; // Invalid input
    }
    if(number == 100) {
      currentNumber *= 100
    } else if(number === 1000 || number === 1000000){
      currentNumber *= number;
      result += currentNumber
      currentNumber = 0
    } else{
      currentNumber +=number
    }
  }
  result += currentNumber;
  return result;
}

const englishWords: string = "one hundred twenty thousand seven hundred sixty";
const numericValue: number = parseNumber(englishWords);
console.log(numericValue); // Output: 125764



