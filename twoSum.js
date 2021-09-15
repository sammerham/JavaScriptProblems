'use strict'

const twoSum = function (arr, target) {

  // const map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   const diff = target - num;

  //   if (diff in map) {
  //     return [map[diff], i];
  //   }
  //   map[num] = i;
  // }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return undefined
};

console.log(twoSum([2, 7, 11, 15], 18));  // [0, 1];