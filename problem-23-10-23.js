/* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const prl2 = (arr) => {
  const product = arr.reduce((acc, val) => acc * val, 1);
  return arr.map((num) => product / num);
};

console.log("prl2", prl2([1, 2, 3, 4, 5]));
