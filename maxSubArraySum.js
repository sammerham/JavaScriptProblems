'use strict'

const maxSubArraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]; //arr[3 -3] + arr[]
    // console.log(tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
                            // [     ]      



const sum = function (array, i) {
  if (array.length === 0) {
    return 0;
  }
  console.log(array[i]);
  if (i === array.length - 1) {
    return array[i];
  }
  return array[i] + sum(array, i + 1);
};
console.log(sum([1, 2, 3, 4, 5, 6], 0)) //2