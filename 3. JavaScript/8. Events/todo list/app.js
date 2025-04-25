let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",() => {
    let listItem = document.createElement("li");

    let task = document.createElement("span");
    task.innerText = input.value;
    listItem.appendChild(task);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    listItem.appendChild(delBtn);

    ul.appendChild(listItem);
    input.value = "";
})


ul.addEventListener("click", (event) =>{
    console.dir(event.target);
    if(event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
        console.log("deleted!!");
    }
})