'use strict'

const getDigit = (num, position) => {
  
  let numStr = String(num);
  let count = 0;
  for (let i = numStr.length - 1; i > 0; i--) {
    if (count === position) return +numStr[i];
    count++;
  }
  return 0
};



// console.log(getDigit(-7323, 3));




