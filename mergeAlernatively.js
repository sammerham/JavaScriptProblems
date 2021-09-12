'use strcit'

const arr1 = [4, 3, 2, 5, 6, 8, 9];
const arr2 = [2, 1, 6, 8, 9, 4, 3];
const mergeAlernatively = (arr1, arr2) => {
  let len = arr1.length + arr2.length;
  let merged = [];
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      merged.push(arr1[i / 2]);   //4 / 2 = 2 
    } else {
      merged.push(arr2[(i - 1 )/ 2]);  // 5-1 = 4 / 2 = 1
    }
  }
  return merged;
};
console.log(mergeAlernatively(arr1, arr2));
//[ 4, 2, 3, 1, 2, 6, 5, 8, 6, 9, 8, 4, 9, 3 ]