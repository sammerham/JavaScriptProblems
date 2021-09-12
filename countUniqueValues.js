'use strict'

const countUniqueValues = arr => new Set(arr).size;

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));