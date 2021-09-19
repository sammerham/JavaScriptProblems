'use strict'


const arr = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
// define pivot help function to find out pivot idx 

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pivotIdx = start;
  // loop
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end);
    // left
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
}

console.log(quickSort(arr));