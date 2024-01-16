function flip2DArray(arr, direction) {
    // Check if the input array is valid
    if (!Array.isArray(arr) || arr.length === 0 || !Array.isArray(arr[0])) {
      throw new Error('Invalid input array');
    }
  
    // Get the number of rows and columns
    const numRows = arr.length;
    const numCols = arr[0].length;
  
    // Clone the original array to avoid modifying it directly
    const flippedArray = arr.map(row => row.slice());
  
    // Perform the flipping based on the specified direction
    if (direction === 'vertical') {
      // Flip vertically
      for (let i = 0; i < numRows / 2; i++) {
        const temp = flippedArray[i];
        flippedArray[i] = flippedArray[numRows - 1 - i];
        flippedArray[numRows - 1 - i] = temp;
      }
    } else if (direction === 'horizontal') {
      // Flip horizontally
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols / 2; j++) {
          const temp = flippedArray[i][j];
          flippedArray[i][j] = flippedArray[i][numCols - 1 - j];
          flippedArray[i][numCols - 1 - j] = temp;
        }
      }
    } else {
      throw new Error('Invalid direction. Use "vertical" or "horizontal".');
    }
  
    return flippedArray;
  }
  
  // Example usage:
  const originalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(originalArray);
  
  const verticallyFlippedArray = flip2DArray(originalArray, 'vertical');
  console.log('Vertically Flipped Array:', verticallyFlippedArray);
  
  const horizontallyFlippedArray = flip2DArray(originalArray, 'horizontal');
  console.log('Horizontally Flipped Array:', horizontallyFlippedArray);
  