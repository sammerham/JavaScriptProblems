'use strict'
const binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;
  let mid = Math.floor((first + last) / 2);
  while (first <= last) {
    if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
    mid = Math.floor((first + last) / 2);
  }
  if (arr[mid] === target) return mid;
  return -1;
}
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));
const arr = [2, 5, 6, 9, 13, 15, 28, 30];
const sumTo = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > num) {
      right--;
    } else if (sum < num) {
      left++;
    } else {
      return [left, right];
    }
  }
  return undefined;
}
console.log(sumTo(arr, 35))
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
      noSwaps = false;
    }
    if (noSwaps) break;
  }
  return arr;
}
const arr1 = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];
console.log(bubbleSort(arr1));