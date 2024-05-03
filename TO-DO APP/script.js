// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

// Add event listener to the Add Task button
addButton.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskElement(taskText);
    const taskDateTime = getCurrentDateTime();
    const taskDateTimeElement = createDateTimeElement(taskDateTime);

    taskItem.appendChild(taskDateTimeElement);
    pendingTasks.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Function to create a task element
function createTaskElement(taskText) {
  const taskItem = document.createElement("li");
  const taskTextElement = document.createElement("span");
  taskTextElement.innerText = taskText;

  const editButton = createButton("Edit", "edit-button");
  editButton.addEventListener("click", editTask);

  const deleteButton = createButton("Delete", "delete-button");
  deleteButton.addEventListener("click", deleteTask);

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Function to create a button
function createButton(text, className) {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add(className);
  return button;
}

// Function to create a date/time element
function createDateTimeElement(dateTime) {
  const dateTimeElement = document.createElement("span");
  dateTimeElement.innerText = dateTime;
  dateTimeElement.classList.add("datetime");
  return dateTimeElement;
}

// Function to get current date and time
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return now.toLocaleString("en-US", options);
}


// Function to edit a task
function editTask() {
  const taskItem = this.parentElement;
  const taskTextElement = taskItem.querySelector("span");
  const newTaskText = prompt("Enter the new task text:", taskTextElement.innerText);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskTextElement.innerText = newTaskText;
  }
}

// Function to delete a task
function deleteTask() {
  const taskItem = this.parentElement;
  const taskList = taskItem.parentElement;
  taskList.removeChild(taskItem);
}
