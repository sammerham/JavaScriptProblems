'use strict'


const arr = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];


const swap = (arr, j, i) => [arr[i], arr[j]] = [arr[j], arr[i]];

const bubbleSort = arr => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}


const merge = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  while (start <= end) {
    let pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
    return arr;
  }
}
const binarySearch = (arr, n) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === n) return mid;
  return -1;
}
// console.log(bubbleSort(arr));
// console.log(selectionSort(arr));
// console.log(insertionSort(arr));
// console.log(merge(arr1, arr2));
// console.log(mergeSort(arr));
console.log(quickSort(arr));