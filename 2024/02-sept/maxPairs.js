function maxPairs(shoes) {
    // Create an object to count the occurrences of each type and size of shoe
    const shoeCount = {};
    
    // Loop through the array of shoes
    shoes.forEach(shoe => {
      // Update the count for each shoe type and size
      if (shoeCount[shoe]) {
        shoeCount[shoe]++;
      } else {
        shoeCount[shoe] = 1;
      }
    });
  
    let pairs = 0;
    
    // Loop through the shoeCount object to find pairs
    for (const shoe in shoeCount) {
      // Check if the shoe is a left shoe
      if (shoe.startsWith('L')) {
        // Get the corresponding right shoe
        const rightShoe = `R${shoe.substring(1)}`;
        // Check if a matching right shoe exists
        if (shoeCount[rightShoe]) {
          // Add the minimum of the left and right shoe counts to the pair count
          pairs += Math.min(shoeCount[shoe], shoeCount[rightShoe]);
        }
      }
    }
    
    return pairs;
  }
  
  // Example usage:
  console.log(maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"])); // Output: 3
  console.log(maxPairs(["L-10", "L-11", "L-12", "L-13"])); // Output: 0
  console.log(maxPairs(["L-8", "L-8", "L-8", "R-8"])); // Output: 1
  