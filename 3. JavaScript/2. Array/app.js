/*
let students = ["shreyas","arya","sumit"];

let fruits = ["mango","apple","litchi"];
fruits[0] = "banana";
console.log(fruits);
fruits[1] = "pineapple";
console.log(fruits);
fruits[10] = "papaya";
console.log(fruits,fruits.length);
*/

let cars = ["BMW","Audi","Prosche","Bentley"];
cars.push("Rolls");
console.log(cars);
console.log(cars.pop());
cars.unshift("Lambo");
console.log(cars,cars.shift());
console.log(cars.indexOf("BMW"));
console.log(cars.includes("audi"))

// PQ
let months = ["january","july","march","august"];
months.splice(0,2,"july","june");
console.log("months:",months);


let primary = ["red","blue","green"];
let secondary = ["yellow","pink","orange"];
let colors = primary.concat(secondary);

console.log(colors.slice(2,4));

let prog = ["c","c++","html","javascript","python","java","c#","sql"];

console.log(prog.reverse().indexOf("javascript"));