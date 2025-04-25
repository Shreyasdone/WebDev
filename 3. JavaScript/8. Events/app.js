/*

let sayHello = () => {
    alert("Hello");
}

let enter = () => {
    console.log("mouse entered");
}

for(btn of btns) {
    // btn.onclick = sayHello;
    btn.onmouseenter = enter;
    btn.addEventListener("dblclick", () => {
        console.log("Double clicked");
    })
}
btn.onclick = () => {
    console.log("clicked");
}
btn.onclick = () => {
    console.log("clicked again");
}

let p = document.querySelector("p");
let div = document.querySelector("div");

p.addEventListener("click", function () {
    console.log("click para");
})

div.addEventListener("mouseenter", function () {
    console.log("entered div");
})
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function printThis () {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", printThis);
h1.addEventListener("click", printThis);
h3.addEventListener("click", printThis);
p.addEventListener("click", printThis);

input.addEventListener("keydown", function(event) {
    console.log(event);
    let key = event.code;
    if(key == "KeyA") console.log("timmy moved left");
    if(key == "KeyW") console.log("timmy moved up");
    if(key == "KeyS") console.log("timmy moved down");
    if(key == "KeyD") console.log("timmy moved right");
})

let btn = document.querySelector("button");
let input = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let user = this.elements[0];
    let pass = this.elements[1];
    
    console.log(`hello ${user.value} your password is ${pass.value}`);
    
})

btn.addEventListener("click", function(event) {
    console.log(event);
})

let user = document.querySelector("input");

user.addEventListener("input", function() {
    console.log(user.value);
    document.querySelector("p").innerText = user.value;
})
*/

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", (event) => {
    // event.stopPropagation();
  console.log("div was clicked");
});
ul.addEventListener("click", (event) => {
    // event.stopPropagation();
  console.log("ul was clicked");
});

for (li of lis) {
  li.addEventListener("click", (event) => {
    // event.stopPropagation();
    console.log("li was clicked");
  });
}
