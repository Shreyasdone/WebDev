let tasks = [];
let command = prompt("Enter a command");

while (true) {
  if (command == "quit") {
    console.log("quitting");
    break;
  }
  let isCommand = false;
  if (command == "list") {
    if (tasks.length == 0) console.log("to-do list is empty");
    else {
      console.log("-----------------");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i+1}. ${tasks[i]}`);
      }
      console.log("-----------------");
    }
  } else if(command == "add") {
    let newTask = prompt("Enter the task: ");
    if(newTask.trim() != "")tasks.push(newTask);
  } else if(command == "remove") {
    let index = prompt("Enter the index of the task to remove");
    tasks.splice(index,1);
    command = "list";
    isCommand = true;
  } else {
    alert("Enter a valid command");
    command = prompt("Enter a command");
    isCommand = true;
  }
  if(!isCommand)
    command = prompt("Enter a command");
}