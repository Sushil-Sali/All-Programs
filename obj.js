// let obj = {
//   name: "Joe",
//   age: 22,
//   city: "Pune",
//   state: "Maharashtra",
// };

// for (let i in obj) {
//   console.log(`${i} : ${obj[i]}`);
// }

// // let key = Object.keys(obj);
// // for (let i = 0; i < key.length; i++) {
// //   console.log(key[i], obj[key[i]]);
// // }
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

let student = {
  name: "Rahul",
  age: 22,
  city: "Pune",
  state: "Maharashtra",
  marks: [70, 80, 90, 92],
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// console.log(student.marks[0]);
// console.log(student.marks[1]);

for (let i = 0; i < student.marks.length; i++) {
  console.log(student.marks[i]);
}
