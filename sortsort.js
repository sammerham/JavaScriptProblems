
'use strict'


const arr = [2, 5, 6, 232, 66, 33, 55, 22, -1, 99, 9, 13, 15, 28, 30];
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

const swap = (arr, j, i) => [arr[i], arr[j]] = [arr[j], arr[i]];







const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}


const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}


const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}


const pivot = (arr, start = 0, end = arr.length - 1) =>  {
  let pivot = arr[start];
  let pivotIdx = start;
  for (let i = start; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, pivotIdx, start);
  return pivotIdx;
}
const quickSort = (arr, start = 0, end = arr.length -1) => {
  if (start <= end) {
    let pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
    return arr;
  }
}

const merge = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}



var replacements =
{
  "ab": "c",
  "ac": "b",
  "bc": "a",
  "ba": "c",
  "ca": "b",
  "cb": "a"
};

function StringReduction(s) {
  var original, key;
  while (s != original) {
    original = s;
    for (key in replacements)
      s = s.replace(key, replacements[key]);
  }
  return s.length;
}


console.log(StringReduction('cccc'))


/**
 * ''' Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text.
The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of
DOM elements is nested correctly so your program should return the string true.
If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a
properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example:
if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into
a <b>, the string would be properly formatted.
Examples
Input: "<div><div><b></b></div></p>"
Output: div
Input: "<div>abc</div><p><em><i>test test test</b></em></p>" '''

import re


def HTMLElements(strParam):
    open_tags = ['<b>', '<i>', '<em>', '<div>', '<p>']
    close_tags = ['</b>', '</i>', '</em>', '</div>', '</p>']

    stack = []

    tags = re.split('(<[^>]*>)', strParam)
    for tag in tags:
        if tag in open_tags:
            stack.append(tag)
        elif tag in close_tags:
            check = close_tags.index(tag)
            if (len(stack) > 0) and (open_tags[check] == stack[len(stack)-1]):
                stack.pop()
    if stack:
        return stack[-1].replace('<', '').replace('>', '')

    return True
 */


// console.log(bubbleSort(arr));
// console.log(selectionSort(arr));
// console.log(insertionSort(arr));
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9));
// console.log(merge(arr1, arr2));
console.log(mergeSort(arr));
// console.log(quickSort(arr));
