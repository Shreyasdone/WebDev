let arr = [1,2,4,5,3];
let chars = [..."shreyas"];
let avg = arr.reduce((res,el) => res + el * el) / arr.length;

let plusFive = arr.map((el) => el+5);

let upper = chars.map((char) => char.toUpperCase());

let doubleAndReturn = (arr,...args) => {
    return [...arr,...args.map((el) => el*2)]
}

let mergeObjs = (obj1,obj2) => {
    return {...obj1,...obj2};
}