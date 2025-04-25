let largerNums = function(arr,num) {
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num)
            ans.push(arr[i]);
    }
    return ans;
}

console.log(largerNums([1,3,4,2,5,6,8,9,7,6],5));

let uniqueChar = function(str) {
    let uniqStr = "";
    for(char of str) {
        if(uniqStr.indexOf(char) == -1) uniqStr += char;
    }
    return uniqStr;
}

// console.log(uniqueChar("abcdabcdefgggh"));

let longestCountry = function(arr) {
    let country = "";
    for(ele of arr) {
        if(ele.length > country.length) {
            country = ele;
        }
    }
    return country;
}

// console.log(longestCountry(["Australia","Germany","United States of America"]));

let vowelCount = function(str) {
    let count = 0;
    for(char of str) {
        if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u') {
            count++;
        }
    }
    return count;
}

// console.log(vowelCount("shreyas"))

let randomInRange = function(min,max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// for(let i = 0; i < 20; i++) {
//     console.log(randomInRange(20,50));
// }

let sq = a => a*a;

// let id = setInterval(() => {
//     console.log("Hello World!");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("cleared intereval");
// },10000);

let avg = (arr) => {
    let sum = 0;
    for(ele of arr) {
        sum += ele;
    }
    return sum / arr.length;
}

let isEven = n => n%2 == 0;

const object = {
    msg: "Hello World!",

    getMsg() {
        console.log(this);
    }
}

// setTimeout(object.getMsg,1000);

let len = "Helo world";
function callback() {
    console.log(this);
}

const obj = {
    len: "Hello earth",
    method() {
        function test () {
            console.log(this);
        }
        test();
    }
}

setTimeout(obj.method,1000);