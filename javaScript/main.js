const inputTask = document.querySelector("#toDoInput");
const addButton = document.querySelector(".addTaskButton");
const taskList = document.querySelector(".list");

//This job of this function is creating the task
addButton.addEventListener("click", addToDo);

// document means HTML page when we reload it.
document.addEventListener("DOMContentLoaded", showToDos());
function addToDo() {
  if (inputTask.value) {
    let inputList = document.createElement("p");
    inputList.textContent = inputTask.value;
    inputList.classList.add("itemList");
    taskList.appendChild(inputList);
    addToLocalStorage(inputTask.value);

    // we will create delete button

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    deleteButton.classList.add("deleteIcon");
    inputList.appendChild(deleteButton);

    // we will create checkBox
    // input.type = "type";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    inputList.appendChild(checkBox);
  }

  // task is the same as the inputTask.value
  // tasks is the key
  function addToLocalStorage(task) {
    let toDoItems;
    if (localStorage.getItem("tasks") === null) {
      toDoItems = [];
    } else {
      toDoItems = JSON.parse(localStorage.getItem("tasks"));
    }
    toDoItems.push(task);
    localStorage.setItem("tasks", JSON.stringify(toDoItems));
  }
}
// This function will get items from local storage and show it at the list if we press "reload" to the page

function showToDos() {
  console.log("111111111111111111111");
  let toDos;
  if (localStorage.getItem("tasks") === null) {
    toDos = [];
  } else {
    toDos = JSON.parse(localStorage.getItem("tasks"));
    toDos.forEach(function (item) {
      let inputList = document.createElement("p");
      inputList.textContent = item;
      inputList.classList.add("itemList");
      taskList.appendChild(inputList);

      // we will create delete button

      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "<i class='far fa-trash-alt'></i>";
      deleteButton.classList.add("deleteIcon");
      inputList.appendChild(deleteButton);

      // we will create checkBox
      // input.type = "type";

      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.classList.add("checkBox");
      inputList.appendChild(checkBox);
    });
  }
}
