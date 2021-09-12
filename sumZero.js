'use strict'

const sumZero = arr => {
  let leftIdx = 0;
  let rigthtIdx = arr.length - 1;

  while (leftIdx < rigthtIdx) {
    let sum = arr[leftIdx] + arr[rigthtIdx];
    if (sum === 0) {
      return [arr[leftIdx], arr[rigthtIdx]]
    } else if (sum > 0) {
      rigthtIdx--;
    } else {
      leftIdx++;
    }
  }
}

console.log(sumZero([-4,-3,-3,-1, 0, 1, 3, 5]))