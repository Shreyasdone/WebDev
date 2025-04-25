let btn = document.createElement("button");
let input = document.createElement("input");

btn.innerText = "Click me";

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

// document.querySelector("#btn").classList.add("bg-blue");

document.querySelector("body").prepend(btn);
document.querySelector("body").prepend(input);

let btnAccess = document.querySelector("#btn");
btnAccess.classList.add("white");
btnAccess.classList.add("bg-blue");

let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
heading.classList.add("purple");
heading.classList.add("underline");

document.querySelector("body").prepend(heading);

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);