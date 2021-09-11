const nights = [
  { "2016-06-25": 32, "2016-06-26": 151, "2016-06-27": null },
  { "2016-06-24": null, "2016-06-25": null, "2016-06-26": null },
  { "2016-06-26": 11, "2016-06-27": 31, "2016-06-28": 31 },
];
const arrayToObject = (arr) => {
  const res = {};
  for (let obj of arr) {
    let keys = Object.keys(obj);
    for (let key of keys) {
      if (!res[key]) {
        res[key] = [obj[key]];
      } else {
        res[key].push(obj[key]);
      }
    }
  }
  return res;
}
console.log(arrayToObject(nights));