document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(e){
    let task = document.querySelector("form input#new-task-description").value
    const li = document.createElement("li");
    const task_list = document.querySelector("ul")
    task_list.appendChild(li).innerText = task
    e.preventDefault();
  })
});
