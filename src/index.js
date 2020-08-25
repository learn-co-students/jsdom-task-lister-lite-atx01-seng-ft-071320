document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function createTasks() {
  let tasks = document.querySelector('body div#main-content div#list ul#tasks')
  let li = document.createElement('li')
  let text = document.getElementById("new-task-description")
  let input = text.value
  li.innerHTML = `${input}`
  tasks.appendChild(li)

}

let submit = document.getElementById("submit")
submit.addEventListener("click", function(event) {document.getElementById("submit"); event.preventDefault(); createTasks();}, false)
tasks.addEventListener("click", function(event) { if (event.target.nodeName === "BUTTON") {

}})
// function selectTasks() {
//   let tasks = document.querySelector('body div#main-content div#list ul#tasks')
//   let li = document.querySelector('li')
//   let text = document.getElementById("new-task-description")
//   let input = text.value
//   li.innerHTML = `${input}`
//   tasks.appendChild(li)

// }
// let tasks = document.querySelector('body div#main-content div#list ul#tasks')
// let li = document.createElement('li')
// let text = document.getElementById("new-task-description")
// let input = text.value
// li.innerHTML = `${input}`
// tasks.appendChild(li)




















// function(event) {
//   alert('I was clicked!');
// }

// submit.addEventListener("click", function(event) {document.getElementById("submit").innerHTML += "Sorry! you can't do this!"; event.preventDefault(); alert('I was clicked!'); }, false);