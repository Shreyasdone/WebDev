//Q1. Write a JavaScript program to get the first n elements of an array. 
// [n can be any positive number].
function firstNelements(arr,n) {
    return arr.slice(0,n);
}

let arr = [1,2,3,4];
console.log(firstNelements(arr,3));


//Q2. Write a JavaScript program to get the last n elements of an array. 
// [n can be any positive number].
function lastNelements(arr,n) {
    return arr.slice(-n);
}

let arr2 = [1,2,3,4];
console.log(lastNelements(arr,3));

//Write a JavaScript program to check whether a string is blank or not.
function isblank(str) {
    if(str.trim().length == 0) return true;
    else return false;
}

let str = " a ";
console.log(isblank(str));

//Write a JavaScript program to test whether the character at the given 
// (character) index is lower case.
function isLower(str,n) {
    if(str[n]==str[n].toLowerCase()) return true;
    else return false;
}

let string = "shrEyas";
console.log(isLower(string,3));

//Q5. if an element exists in an array or not
function hasElement(arr,ele) {
    return arr.indexOf(ele) == -1 ? false : true;
}

console.log(hasElement(arr,10));