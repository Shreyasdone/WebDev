/* Template Literals

let pencil = 10, erasor = 5;
let output = "The total price is" + pencil+erasor + " Rupees.";
console.log(`The total price is: ${pencil+erasor} Rupees.`);
*/

/* Conditional Statements

console.log("Before if Statement");
let age = 19;
if(age >= 18) {
    console.log("You can vote");
}
console.log("After if Statement");
*/

/* Traffic Light System (if practice Q)

let color = "green";
if(color == "red") {
    console.log("Stop");
}
if(color == "yellow") {
    console.log("Slow Down");
}
if(color == "green") {
    console.log("Go");
}
*/

/* Popcorn System (else if & else practice Q)

let size = 'XL';
if(size == 'XL') {
    console.log("The price of popcorn is ₹250");
} else if(size == 'L') {
    console.log("The price of popcorn is ₹200");
} else if(size == 'M') {
    console.log("The price of popcorn is ₹150");
} else {
    console.log("The price of popcorn is ₹100");
}

*/

/* Good String (logical operators eg. &&, ||)
let str = "snake";
if(str[0]==='a' && str.length > 3) {
    console.log(`The string "${str}" is good!!`);
} else {
    console.log(`The string "${str}" is not good.`);
}
*/

/* Signal System using Switch case
let color = "green";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broker Signal Light");
        break;
}
*/

/* Day based on number using Switch case

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Firday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("wrong day!");
}
*/

// alerts & prompts
// alert("something is wrong");
// console.error("This is a simple error msg");
// console.warn("This is a simple warning msg");
let firstName = prompt("Enter Your first name: ");
let lastName = prompt("Enter Your last name: ");

alert(`Welcome ${firstName+" "+lastName}!!`);