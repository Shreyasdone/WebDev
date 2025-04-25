/*
function hello() {
    console.log("Hello World!");
}
hello();

function rollDice() {
    console.log(Math.floor(Math.random() *6)+1);
}

for(let i = 0; i < 10; i++) {
    rollDice();
}

function printInfo(name,age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("shreyas",19);

function avg(a,b,c) {
    return (a+b+c) / 3;
}

console.log(avg(avg(4,4,4),6,8));

function sumToN(n) {
    if(n == 1) return 1;
    return n + sumToN(n-1);
}

console.log(sumToN(10));

function concatAll(arr) {
    let concated = "";
    for(str of arr) {
        concated += str;
    }
    return concated;
}

console.log(concatAll(["shree","done","arya","patil"]));

for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 2; j++) {
        var k = 9;
    }
}
console.log(i,j,k);

function test() {
    var t = 100;
}

console.log(t);//error

let sum = function (a,b) {
    return a+b;
}

sum(3,5);

function multiGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();        
    }
}

let greet = function () {
    console.log("greet");
}

multiGreet(greet,10);
multiGreet(function () {console.log("Namaste")}, 10);

function oddOrEvenFactor(req) {
    if(req == "odd") {
        return function(n) {
            console.log(`${n} is ${!(n%2 == 0)}`);
        }
    } else if(req == "even") {
        return function(n) {
            console.log(`${n} is ${!(n%2 == 0)}`);
        }
    } else {
        console.log("Invalid request");
}
}

let request = "odd";
let func = oddOrEvenFactor(request);
func(10);func(3);
request = "even";
func = oddOrEvenFactor(request);
func(10);func(3);

const calculator = {
    add: function(a,b) {
        return a + b;
    },
    sub: function(a,b) {
        return a - b;
    },
    mul: function(a,b) {
        return a * b;
    }
}

console.log(calculator.add(5,8));
console.log(calculator.sub(5,1));
console.log(calculator.mul(9,8));

const student = {
    name: "shreyas",
    age: 19,
    city: "pune",
    math: 99,
    eng: 97,
    chem: 91,
    getAvg() {
        console.log((this.math+this.eng+this.chem)/3);
    }
}

student.getAvg();

console.log("hello");
console.log("hello");
try {
    console.log(a);
    console.log("hello");
} catch {
    console.log("invalid");
}
console.log("hello2");
console.log("hello2");

let sum = (a,b) => {
    console.log(a+b);
};

let cube = n => console.log(n*n*n);

let pow = (a,b) => console.log(a**b);

let mul = (a,b) => (
    a * b
);

sum(4,12);
cube(4);

console.log("Hi There!");

setTimeout(() => {
    console.log("Sharyas LTD.");
}, 4000);
console.log("Welcome To");

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);
    
console.log(id);
*/

let dream = "Arya's Husband";
const student = {
  name: "shreyas",
  dream: "SDE",
  getName: function () {
    console.log(this);
    return this.name;
  },
  getDream: () => {
    console.log(this);
    return this.dream;
  },
  getInfo1: function() {
    setTimeout(function() {
        console.log(this);
    }, 2000);
  },
  getInfo2: function() {
    setTimeout(() => {
        console.log(this);
    }, 2000);
  }
};
