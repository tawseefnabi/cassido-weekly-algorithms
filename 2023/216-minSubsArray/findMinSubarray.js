function minSubArray(arr, k){
  let currentSum = 0
  let minSum =0
  let index = 0
  for(let i=0;i<k;i++){
    minSum += arr[i]
  }
  
  for(let i=k;i<arr.length;i++){
    currentSum =  arr[i]- arr[i-k]
    if (currentSum < minSum) {
      minSum = currentSum;
      index = i - k + 1;
    }
  }
   // Create and return the subarray with the minimum sum.
   return arr, arr.slice(index, index + k);
}

const arr = [2, 1, 3, 5, 4];
const k = 3;
const result = minSubArray(arr, k);

console.log(result); // Output: [1, 3, 5]

console.log(minSubArray([4,4,4,4,8], 2))
console.log(minSubArray([1,3,20,4,8,9,11], 3));