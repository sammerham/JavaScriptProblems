'use strict'

function strJustify(line, length) {
  let words = line.split(' ');  // arr of words
  let diff = length - line.length;   // difference between main str length and given length;
  // console.log('diff', diff)
  let spaces = words.length - 1;    // number of spaces in given str;
  // console.log('spaces', spaces)
  let neededSpaces = diff / spaces;   // number of needed spaces between words to make up the given length;
  let newSpace = ' '.repeat(neededSpaces + 1);  // convert num of spaces plus 1 for the normal single space between words into str of spaces
  let extraSpaces = diff % spaces;  // if not given an even number and have a remianing space
  let extraSpaceStr = ' '.repeat(extraSpaces);   // convert the num of extra spaces into str of spaces
  // console.log('extraSpaces', extraSpaces)
  // console.log('length new space', newSpace.length)
  if (!extraSpaces) {    // if we don't have extra spaces, join the arr of words back into string on the new spaces and return 
    return words.join(newSpace)
  } else {    // otherwise  add the extra space after the first word of the arr 
    words[0] += extraSpaceStr;  
    return words.join(newSpace);   // join the arr back on the new spaces and return
  }
}


console.log(strJustify("The quick brown fox jumped", 55));