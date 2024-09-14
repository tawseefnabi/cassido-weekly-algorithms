function minRowsRequired(groups, rowSize) {
    let rows = 0;
    let currentRowSpace = rowSize;
  
    for (let i = 0; i < groups.length; i++) {
      if (groups[i] > currentRowSpace) {
        // Start a new row if the current group doesn't fit
        rows++;
        currentRowSpace = rowSize;
      }
      currentRowSpace -= groups[i];
    }
  
    // Count the last row if it contains any people
    if (currentRowSpace < rowSize) {
      rows++;
    }
  
    return rows;
  }
  
  // Example usage:
  let  groups = [3, 4, 2, 1]; // The number of people in each group
  const rowSize = 5; // The max size of a row
  
  console.log(minRowsRequired(groups, rowSize)); // Output: 3
  groups = [4, 5, 4, 3, 3]
  console.log(minRowsRequired(groups, rowSize)); // Output: 3

  