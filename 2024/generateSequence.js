// You have an array of letters. Return the number of possible sequences of letters you can make using the letters in the array. Extra credit: print the sequences!

// Example:

// letters(['X'])
// 1

// letters(['A', 'A', 'B'])
//  8 // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"

countSequence=(arr) =>{
    generateSequence= (current, remaining)=>{
        if(remaining.length ===0){
            console.log("current", current);
            sequences.push(current)
            return
        }
        for(let i=0; i<remaining.length; i++){
            // console.log("==", remaining[i]);
            const newCurrent = current + remaining[i]
            // console.log("new", newCurrent);
            let newRemaining = remaining.slice(0, i).concat(remaining.slice(i+1))
            // console.log("newRemaining", newRemaining);
            generateSequence(newCurrent, newRemaining)
        }
    }
    const sequences = []
    generateSequence("", arr)
    console.log("sequences", sequences);
    console.log("length:", sequences.length);
}

countSequence(['A', 'A', 'B'])