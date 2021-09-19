'use strict'

const findSmallestDivisor = (s, t) => {
  let fits = false;
  let concat = t;
  let i = 0;
  while (concat.length <= s.length) {
    if (concat !== s) {
      i++;
      concat = t.repeat(i);
    } else {
      fits = true;
      break;
    }
  }
  if (!fits) return -1;
  for (let i = 0; i < t.length; i++) {
    if (t.slice(0, i).repeat(t.length / i)) return i;
  }
}

console.log(findSmallestDivisor("bcdbcdbcd", "bcdbcd"))



// Find whether string s is divisible by string t.A string s divisible by string t if string t can be concatenated some number of times to obtain the string s.
// If s is divisible, find the smallest string u such that it can be concatenated some number of times to obtain both s and t.
// If it is not divisible, set the return value to - 1.
// Finally, return the length of the string u or - 1.

// Example 1:

// s = "bcdbcdbcdbcd"

// t = "bcdbcd"

// If string t is concatenated twice, the result is "bcdbcdbcdbcd" which is equal to the string s.The string s is divisible by string t.

// Since it passes the first test, look for the smallest string u that can be concatenated to create both strings s and t.

// The string "bcd" is the smallest string that can be concatenated to create both strings s and t.

// The length of the string u is 3, the integer value to return.

//   Example 2:

// s = "bcdbcdbcd"

// t = "bcdbcd"

// If string t is concatenated twice, the result is "bcdbcdbcdbcd" which is greater than string s.There is an extra "bcd" in the concatenated string.

// The string s is not divisible by string t, so return -1.

// Function Description

// Complete the function findSmallestDivisor in the editor below.The function should return a single integer denoting the length of the smallest string u if string s is divisible by string t, or return -1 if not.

// findSmallestDivisor has the following parameter(s):

// s: string s

// t: string t

// Constraints

// 1 ≤ size of s ≤ 2 x 105
// 1 ≤ size of t ≤ 2 x105
// size of t ≤ size of s