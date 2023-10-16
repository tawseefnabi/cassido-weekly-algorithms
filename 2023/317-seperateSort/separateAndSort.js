// This week's question:
// Given an array of integers, sort them into two separate sorted arrays of even and odd numbers. If you see a zero, skip it.

// Example:

//  separateAndSort([4,3,2,1,5,7,8,9])
//  [[2,4,6], [1,3,5,7,9]]

//  separateAndSort([1,1,1,1])
//  [[], [1,1,1,1]]


function separateAndSort(nums){

  let oddArray = []
  let evenArray = []
  const sorted = nums.sort()
  for(s of sorted){
    s%2==0 ? evenArray.push(s): oddArray.push(s)
  }
  return [evenArray, oddArray]
}
console.log(separateAndSort([4,3,2,1,5,7,8,9])) //  [[2,4,6], [1,3,5,7,9]]
console.log(separateAndSort([1,1,1,1])) //  [[], [1,1,1,1]]