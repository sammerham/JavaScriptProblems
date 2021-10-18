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
  for (let obj1 of arr1) {
    let idx = arr2.findIndex(obj2 => obj1.id === obj2.id);
    if (idx > - 1) {
      obj1.name = arr2[idx].name;
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