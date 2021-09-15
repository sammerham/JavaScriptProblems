'use strict'
const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  // while (arr[mid] !== num && start <= end) {
  while (start <= end) {
    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === num) return mid;
  return -1;
}; 

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));