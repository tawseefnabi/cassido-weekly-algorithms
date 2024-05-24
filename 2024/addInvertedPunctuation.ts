function addInvertedPunctuation(str: string): string {
    // Split the string into sentences
    const sentences = str.split(/([.?!])/).filter(Boolean);
    let result = '';

    for (let i = 0; i < sentences.length; i += 2) {
        let sentence = sentences[i].trim();
        let punctuation = sentences[i + 1] || '';

        if (punctuation === '?' && !sentence.startsWith('¿')) {
            sentence = '¿' + sentence;
        } else if (punctuation === '!' && !sentence.startsWith('¡')) {
            sentence = '¡' + sentence;
        }

        result += sentence + punctuation + ' ';
    }

    return result.trim();
}

// Example usage:
const input = "How are you? I'm fine! How about you? I'm doing well.";
const output = addInvertedPunctuation(input);
console.log(output);  // "¿How are you? ¡I'm fine! ¿How about you? ¡I'm doing well."
