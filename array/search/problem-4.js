/*
Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element 
that occurs more than once and whose index of the first occurrence is the smallest. 
Examples: 
Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 
Explanation: 5 is the first element that repeats
*/

// Time Complexity: O(N^2).
// Auxiliary Space: O(1).
function prl_4_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return -1;
}

/*===========================*/

// Time Complexity: O(n).
// Auxiliary Space: O(n).
function prl4_2(arr) {
  let repeatNum = -1;
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      repeatNum = arr[i];
    }
    set.add(arr[i]);
  }
  return repeatNum;
}

const numbers = [10, 8, 3, 4, 3, 8, 6];
const result = prl_4_1(numbers);
console.log("result", result);
