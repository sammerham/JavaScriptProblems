'use strict'

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];
// another solution
const mergeTwo = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    };
  };
  // check if there are any other elements  in arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  };
  // check if there are any other elements  in arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  };
  return merged;
}
console.log(mergeTwo(arr1, arr2));
[1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]
