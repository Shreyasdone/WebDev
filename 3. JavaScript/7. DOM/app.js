/*
let smallImage = document.getElementsByClassName("oldImg");

for(let i = 0; i < smallImage.length; i++) {
    smallImage[i].src = "assets/spiderman_img.png";
    console.log(`source for image no ${i} is changed`);
}

console.dir(document.querySelector("a"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));
*/

let redP = document.createElement("p");
let blueH3 = document.createElement("h3");
let pinkDiv = document.createElement("div");
let h1InDiv = document.createElement("h1");
let pInDiv = document.createElement("p");

// redP.style.color = "red";
// blueH3.style.color = "blue";
// pinkDiv.style.backgroundColor = "pink";
// pinkDiv.style.border = "black 2px";

redP.innerText = "Hey, I'm red!";
blueH3.innerText = "I'm a blue h3";
h1InDiv.innerText = "I'm in div";
pInDiv.innerText = "ME TOO!";

redP.classList.add("red");
blueH3.classList.add("blue");
pinkDiv.classList.add("pink");
pinkDiv.classList.add("box");

pinkDiv.append(h1InDiv);
pinkDiv.append(pInDiv);

let body = document.querySelector("body");

body.append(pinkDiv);
body.append(blueH3);
body.append(redP);
