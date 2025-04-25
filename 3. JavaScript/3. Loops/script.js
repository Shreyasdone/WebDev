/*
let n = prompt("Enter the table you want to print");
n = parseInt(n);
console.log(typeof(n))
for (let i = 1; i <= 10; i++) {
  console.log(n * i);
}
*/
/*
for (let i = 1; i <= 3; i++) {
    console.log("output for",i,"th loop");
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}
*/
/*
let i = 0;
while(i<=20){
    console.log(i+=2);
}
*/
/*
const fav = "avatar";
let guess;
guess = prompt("Guess the movie");
while (guess != fav) {
    if(guess == "quit") {
        console.log("You quit");
        break;
    }
    guess = prompt("wrong guese please try again");
}
if(guess == fav) console.log("Congratulations you guessed the movie correctly!");
*/

/*
let fruits = ["mango","apple","lichi","orange","papaya"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
*/
/*
let heors = [["ironman","spiderman","thor"],["superman","flash","batman"]];

for (let i = 0; i < heors.length; i++) {
    for(let j = 0; j < heors[i].length; j++) {
        for(let k = 0; k < heors[i][j].length; k++) {
            process.stdout.write(`${heors[i][j][k]}-`);
        }
        console.log();
    }
}
*/

let students = [["shreyas",87],["arya",100],["isha",95]];
let names = ["shreyas","arya","isha"];
// for(let i = 0; i < students.length; i++) {
//     console.log(`info of student no ${i+1}`);
//     for(let j = 0; j < students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }
for(student of students) {
    for(details of student) {
        console.log(details);
    }
}