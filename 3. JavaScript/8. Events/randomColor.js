let heading = document.querySelector("h1");
let btn = document.querySelector("button");
let area = document.querySelector(".color-field");


btn.addEventListener("click", function () {
    let color = generateColor();
    area.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    heading.innerText = `rgb(${color[0]},${color[1]},${color[2]})`;
})

let generateColor = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r,g,b];
}

