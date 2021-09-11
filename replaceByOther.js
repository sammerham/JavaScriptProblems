'use strict'

//Write a function that takes two arrays of objs, it should search the first array for objects with the same "id" property 
// that is present in the second array.
//Then it  should replace the "name" property of those objects with the corresponding "name" property of the second array's objects.


const arr1 = [
  { id: '124', name: 'qqq' },
  { id: '589', name: 'www' },
  { id: '45', name: 'eee' },
  { id: '567', name: 'rrr' }
];
const arr2 = [
  { id: '124', name: 'ttt' },
  { id: '45', name: 'yyy' }
];

const replaceByOther = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    let idx = arr2.findIndex(elm => elm['id'] === el['id']);
    if (idx === -1) {
      continue;
    } else {
      el['name'] = arr2[idx]['name'];
    }
  }
  return arr1;
};



// const output = [
// { id: '124', name: 'ttt' },
// { id: '589', name: 'www' },
// { id: '45', name: 'yyy' },
// { id: '567', name: 'rrr' }
// ];

replaceByOther(arr1, arr2);
console.log(arr1);