/* ================ .map() =============== */
const numbers = [1, 2, 3, 4];
// tạo mảng mới contain only even numbers
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

/* =================== .filter() ================== */
// filter out off numbers
const numbers2 = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// get all the students whose grades are greater than or equal to 90.
const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

/* =================== .reduce() ================== */

const numbers3 = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, currentItem) {
  return accumulator + currentItem;
}, 0); // the initial value
console.log(sum); // 10
