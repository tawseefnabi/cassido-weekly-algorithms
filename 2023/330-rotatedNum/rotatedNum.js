// There is a sorted integer array that has been rotated an unknown number of times. 
// Given that rotated array, return how many times it has been rotated. It may contain duplicate numbers!

// Example:

// > rotatedNum([4, 0, 1, 2, 3])
// > 1

// > rotatedNum([7, 9, 20])
// > 0

// > rotatedNum([7, 7, 314, 1337, 7])
// > 4

const rotatedNum = (nums) => {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else if (nums[mid] < nums[high]) {
            high = mid;
        } else {
            // Handle duplicates
            high--;
        }
    }

    return low;
  };
  
  console.log(rotatedNum([4, 0, 1, 2, 3]), 1);
  console.log(rotatedNum([7, 9, 20]), 0);
  console.log(rotatedNum([7, 7, 314, 1337, 7]), 4);
  console.log(rotatedNum([7, 7, 7, 314, 1337]), 0);
  console.log(rotatedNum([7, 314, 1337, 7, 7]), 3);
