'use strict'


//We are required to write a JavaScript function that takes in one such array and 
//returns an object of the object where the key of each object should be the id property.

const arr = [{ id: 1, name: "aa" }, { id: 2, name: "bb" }, { id: 3, name: "cc" }];
//const output = {1:{name:"aa"},2:{name:"bb"},3:{name:"cc"}};


const arrayToObject = arr => {
  const result = {};
  for (let obj of arr) {
    const key = obj.id;
     delete obj.id;
     result[key] = obj;
     // delete result[key].id;
  }
  return result;
};

console.log(arrayToObject(arr));