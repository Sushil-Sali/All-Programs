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

// let student = {
//   name: "Rahul",
//   age: 22,
//   city: "Pune",
//   state: "Maharashtra",
//   marks: [70, 80, 90, 92],
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// // console.log(student.marks[0]);
// // console.log(student.marks[1]);

// for (let i = 0; i < student.marks.length; i++) {
//   console.log(student.marks[i]);
// }

// let student = [
//   { name: "sushil", marks: 87 },
//   { name: "rahul", marks: 90 },
//   { name: "Yogesh", marks: 88 },
//   { name: "Rushi", marks: 95 },
//   { name: "Rushabh", marks: 80 },
// ];

// // console.log(student[0]);
// // console.log(student[1].marks);
// for (let i = 0; i < student.length; i++) {
//   if (student[i].marks > 90) {
//     console.log(student[i]);
//   }
// }

let shows = [
  { type: "movie", name: "Avengers", rating: 4.5 },
  { type: "TV Show", name: "TMKO", rating: 4.8 },
  { type: "movie", name: "Inception", rating: 4.9 },
  { type: "TV Show", name: "Friends", rating: 4.7 },
];
let res = [];
for (let i = 0; i < shows.length; i++) {
  if (shows[i].type == "movie") {
    res.push(shows[i]);
  }
}
console.log(res);
