'use strict'

const twoSum = function (nums, target) {

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (diff in map) {
      return [map[diff], i];
    }
    map[num] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));