let h2 = document.querySelector("h2");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");

// window.addEventListener("load", () => {
//     alert("load triggered");
// })

btn.onclick = () => {
    btn.style.backgroundColor = "green";
}

input.addEventListener("input", (event) => {
    if(event.data >= "A" && event.data <= "Z" || event.data >= "a" && event.data <= "z" || event.data == " " || event.data == null) h2.innerText = input.value;
    else {
        console.log(event.data);
        alert("enter valid char");
        input.value = input.value.slice(0,-1);
    }
    // if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
    //     console.log(input.value);
    // } else {
    //     alert("enter character only from A-Z an a-z");
    // }
})


