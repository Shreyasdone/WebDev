console.log("---------------------------");
console.log("Welcome to Ranodom Number Guesser");
console.log("---------------------------");
let max = prompt("Enter the max: ");
let tries = prompt("Enter the maximum tries");
let rand = Math.floor(Math.random() * max) + 1;
console.log(rand);
let guess = prompt("What is your guess?");
while(tries-- > 0) {
    if(guess == rand) {
        console.log("Congratulations!! you guessed correctly");
        break;
    } else if(guess < rand) {
        guess = prompt("HINT: Your guess was too small");
    } else if(guess > rand) {
        guess = prompt("HINT: Your guess was too large");
    }
}

if(tries == 0) console.log(`Sorry you couldn't guess the number it was ${rand}`);