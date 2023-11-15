/*
Given an array with all distinct elements, find the largest three elements. 
Expected time complexity is O(n) and extra space is O(1). 
Example: 
Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23
*/

// Time Complexity: O(N).
// Auxiliary Space: O(1).
function pr2(array) {
  if (array.length < 4) {
    return -1;
  }
  let first, second, third;
  first = second = third = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];
    } else if (array[i] > second) {
      third = second;
      second = array[i];
    } else if (array[i] > third) {
      third = array[i];
    }
  }
  return [first, second, third];
}

const numbers = [10, 4, 3, 50, 23, 90];
const result = pr2(numbers);
console.log("result", result);
