/* 
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. 
*/

const prl1 = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
};

const prl1_a = (arr, k) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let x = k - arr[i];
    if (obj[x] !== undefined) {
      return true;
    }
    obj[arr[i]] = i;
  }
  return false;
};

console.log(prl1_a([10, 15, 3, 7], 17));
