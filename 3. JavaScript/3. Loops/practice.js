/*
let nums = [2,1,5,4,2,6,9,2];
let num  = 2;
for(let i = 0; i < nums.length; i++) {
    if(nums[i] == num) {
        nums.splice(i,1);
    }
}
console.log(nums);
*/

let num = 287152,sum = 0;
console.log(num.toString().length);
for (char of num.toString()) {
    // console.log(char);
    sum += parseInt(char);
}
console.log(sum);