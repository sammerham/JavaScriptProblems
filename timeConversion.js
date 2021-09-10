'use strict'

//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

//if time is am between 1-11 or 12 pm  do nothing
// if 12 mid night change to 00
// if pm 1-11 add 12
const timeConversion = str => {
  // decide am or pm
  let amPm = str.charAt(8);
  let militaryHour = '';
  // if am 
  if (amPm === 'A') {
    if (str.substring(0, 2) === '12') {
      militaryHour = '00';
    } else {
      militaryHour = str.substring(0, 2);
    }
    // if pm
  } else {
    if (str.substring(0, 2) === '12') {
      militaryHour = str.substring(0, 2);
    } else {
      militaryHour = parseInt(str.substring(0, 2), 10) + 12;
    }
  }
  return militaryHour + str.substring(2, 8);
};
console.log(timeConversion('01:00:00PM'));