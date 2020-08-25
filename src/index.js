document.addEventListener("DOMContentLoaded", () => {
const newTaskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.createElement("li");
newTask.innerHTML = newTaskDescription.value; 
newTaskForm.addEventListener("submit", createNewTask);
});


function createNewTask(e){
  e.preventDefault()
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerHTML = newTaskDescription.value; 
  document.getElementById("tasks").appendChild(newTask);
}
