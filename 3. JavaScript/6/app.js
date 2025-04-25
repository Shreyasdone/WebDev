let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let students = [
  {
    name: "shree",
    marks: 94,
  },
  {
    name: "arya",
    marks: 99,
  },
  {
    name: "sumit",
    marks: 90,
  },
];

/*
students.forEach((student) => {
  console.log(student.name, student.marks);
});

let gpa = students.map((student) => {
  return student.marks / 10;
});
arr.forEach(function(el) {
    console.log(el);
})

arr.forEach((el) => {
    console.log(el);
})

let double = arr.map(function (el) {
    return el * el;
});

let even = arr.filter((el) => (el < 5));
*/

let evry = arr.every((el) => el % 2 == 0);

let some = arr.some((el) => el > 10);

let red = arr.reduce((res, el) => res + el);

let max = arr.reduce((res, el) => {
  if (el > res) return el;
  else return res;
});

let tensMul = arr.every((el) => el % 10 == 0);

function sum(a, b = 2) {
  return a + b;
}

console.log(Math.min(...arr));
console.log(..."ShreyasDone");

let newArr = [...arr];
newArr.push(6);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];
let nums = [...odd, ...even];

function mul(...args) {
  console.log(arguments);
  return args.reduce((res, ele) => res * ele);
}
