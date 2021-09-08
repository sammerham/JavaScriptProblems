'use strict'


let arr = [
  [1, 2, 3],   // arr[0][0] 1   // arr[0][2-0]
  [4, 5, 6],
  [9, 8, 9]
]
//2
// Given a square matrix, calculate the absolute difference between the sums of its diagonals

const diagonalDifference = arr => {
  let leftSum = 0;
  let rigthSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i][i];
    let right = arr[i][arr.length - 1 - i];
    leftSum += left;
    rigthSum += right;
  }
  return Math.abs(leftSum - rigthSum);
}



console.log(diagonalDifference(arr));