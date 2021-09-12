'use strict'


const freqCounter = arr => {
  const fCounter = {};
  for (let el of arr) {
    fCounter[el] = fCounter[el] + 1 || 1;
  }
  return fCounter;
}

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = freqCounter(arr1);
  const counter2 = freqCounter(arr2);
  console.log(counter1, counter2)

  for (let key in counter1) {
    if (!counter2[key ** 2]) return false;
    if (counter1[key] !== counter2[key ** 2]) return false;
  }
  return true;
}

// same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(same([1, 2, 3, 2], [9, 1, 9, 4]))
