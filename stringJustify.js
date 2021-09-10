'use strict'

function strJustify(line, length) {
  let words = line.split(' ');  // arr of words
  let diff = length - line.length;   // difference between main str length and given length;
  // console.log('diff', diff)
  let spaces = words.length - 1;    // number of spaces in given str;
  // console.log('spaces', spaces)
  let neededSpaces = diff / spaces;   // number of needed spaces between words to make up the given length;
  let newSpace = ' '.repeat(neededSpaces + 1);
  let extraSpaces = diff % spaces;
  let extraSpaceStr = ' '.repeat(extraSpaces);
  // console.log('extraSpaces', extraSpaces)
  // console.log('length new space', newSpace.length)
  if (!extraSpaces) {
    return words.join(newSpace)
  } else {
    words[0] += extraSpaceStr;
    return words.join(newSpace);
  }
}


console.log(strJustify("The quick brown fox jumped", 55));