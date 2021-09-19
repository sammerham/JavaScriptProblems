'use strict'


const arr = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

//time complexity o(n2) if almost sorted o(n);
const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// time complexity o(n2)
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}
// time complexity o(n2) if almost sorted o(n);
const insertionSort = arr => {
  let noSwaps;
  for (let i = 1; i < arr.length; i++) {
    noSwaps = true;
    for (let j = i - 1; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        swap(arr, j, j - 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));