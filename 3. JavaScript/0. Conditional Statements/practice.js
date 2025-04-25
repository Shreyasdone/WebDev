/* Practice Q1
let num = 20;
if(num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}*/

/* Practice Q2
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

alert(`${name} is ${age} years old.`);
*/

/* Practice Q3
let quarter = 3;

switch (quarter) {
    case 1:
        console.log("January February March");
        break;
    case 2:
        console.log("April May June");
        break;
    case 3:
        console.log("July August September");
        break;
    case 4:
        console.log("October November December");
        break;
    default:
        console.log("wrong quarter");
        break;
}*/

/* Practice Q4
let str = "Apple";

if((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log("Golden string");
} else {
    console.log("Not a Golden String");
}*/

/* Practice Q5 (Largest of Three)
let num1 = 20, num2 = 1, num3 = 10;

if(num1>num2) {
    if(num1>num3) {
        console.log(`${num1} is the largest of three`);
    } else {
        console.log(`${num3} is the largest of three`);
    }
} else {
    if(num2>num3) {
        console.log(`${num2} is the largest of three`);
    } else {
        console.log(`${num3} is the largest of three`);
    }
}*/

let a = 32, b = 47852;

if(a%10 === b%10) {
    console.log("Same last char");
} else {
    console.log("Not same last char");
}