'use strict'

const arr = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};
  
console.log(bubbleSort(arr));