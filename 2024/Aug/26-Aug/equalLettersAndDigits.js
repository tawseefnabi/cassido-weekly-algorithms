function equalLettersAndDigits(s) {
    let maxLength = 0;
    let result = "";

    // Function to count distinct letters and digits
    function countDistinctLettersAndDigits(substring) {
        let letters = new Set();
        let digits = new Set();

        for (let char of substring) {
            if (/[a-zA-Z]/.test(char)) {
                letters.add(char);
            } else if (/[0-9]/.test(char)) {
                digits.add(char);
            }
        }

        return {
            lettersCount: letters.size,
            digitsCount: digits.size,
        };
    }

    // Iterate through all possible substrings
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            let { lettersCount, digitsCount } = countDistinctLettersAndDigits(substring);

            if (lettersCount === digitsCount && substring.length > maxLength) {
                maxLength = substring.length;
                result = substring;
            }
        }
    }

    return result;
}

// Test cases
console.log(equalLettersAndDigits("abc12345")); // "abc123"
console.log(equalLettersAndDigits("a123b4c"));  // ""
console.log(equalLettersAndDigits("a12bc34")); 
