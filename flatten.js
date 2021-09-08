const flatten = arr => {
  let flattedArr = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      flattedArr = flattedArr.concat(flatten(el));
      // const subArr = flatten(el);
      // flattedArr.push(...subArr);
    } else {
      flattedArr.push(el);
    }
  }
  return flattedArr;
}


console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))  // [1,2,3]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([1, 3, 4, 65, [3, 5, 6, 9, [354, 5, 43, 54, 54, 6, [232, 323, 323]]]]))
// [1, 3, 4, 65, 3, 5, 6, 9, 354, 5, 43, 54, 54, 6, 232, 323, 323]
