'use strict'
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];


const mergeTwo = (arr1, arr2) => {
  const merged = [];
  let idx1 = 0;
  let idx2 = 0;
  let count = 0;
  let len = arr1.length + arr2.length;

  while (count < len) {
    let el1 = arr1[idx1];
    let el2 = arr2[idx2];

    let isArray1Empty = idx1 >= arr1.length;
    let isArray2Empty = idx2 >= arr2.length;

    if (!isArray1Empty && (isArray2Empty || el1 < el2)) {
      merged[count] = el1;
      idx1++;
    } else {
      merged[count] = el2;
      idx2++;
    }
    count++;
  }
  return merged;
}

console.log(mergeTwo(arr1, arr2));
[1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]
