'use strict'

const USERS = [
  { id: 32, fName: 'Sam', lName: 'Merham'},
  { id:36, fName:'Dan', lName:'Merham1'},
  {id:32, fName:'Sam', lName:'Merham'},
  { id: 38, fName: 'Oli', lName: 'Merham2' },
  { id: 36, fName: 'Dan', lName: 'Merham1' },
  { id: 38, fName: 'Oli', lName: 'Merham2' },
]


const removeDups = arr => [...arr.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];
  // const strArr = arr.map(obj => JSON.stringify(obj));
  // return [... new Set(strArr)].map(el => JSON.parse(el));
  
console.log(removeDups(USERS));