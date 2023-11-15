/*  
Given an array arr[] of size N-1 with integers in the range of [1, N], 
the task is to find the missing number from the first N integers.
Note: There are no duplicates in the list.
Example: 
Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
Output: 5
Explanation: Here the size of the array is 7, so the range will be [1, 8]. The missing number between 1 to 8 is 5
*/

// Time Complexity: O(N).
// Auxiliary Space: O(1).
function prl3_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return -1;
}

/*============================*/

// Time Complexity: O(N).
// Auxiliary Space: O(1).
function prl3_2(arr) {
  let n = arr.length;
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 6];
const result1 = prl3_1(numbers);
const result2 = prl3_2(numbers);
console.log("result1", result1);
console.log("result2", result2);
