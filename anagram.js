'use strict';

const freqCounter = str => {
  const fCounter = {};
  for (let char of str) {
    fCounter[char] = fCounter[char] + 1 || 1;
  }
  return fCounter;
}
const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;
  const firstCounter = freqCounter(first);
  const secondCounter = freqCounter(second);

  for (let char in firstCounter) {
    if (!secondCounter[char]) return false;
    if (secondCounter[char] !== firstCounter[char]) return false;
  }
  return true;
}

console.log(validAnagram('anagrams', 'nagaramm'));