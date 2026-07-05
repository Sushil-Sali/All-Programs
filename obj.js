let obj = {
  name: "Joe",
  age: 22,
  city: "Pune",
  state: "Maharashtra",
};

for (let i in obj) {
  console.log(`${i} : ${obj[i]}`);
}

// let key = Object.keys(obj);
// for (let i = 0; i < key.length; i++) {
//   console.log(key[i], obj[key[i]]);
// }
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
