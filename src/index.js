document.addEventListener("DOMContentLoaded", () => {

});

const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', function(event) {
  //let input = document.getElementById("new-task-description").value;
  const task = document.createElement("li");
  const button = document.createElement("BUTTON");

  task.innerHTML = `${form.elements[0].value}`;
  list.appendChild(task);
  button.innerHTML = "x";
  task.appendChild(button);
  button.addEventListener("click", function(event) {
    task.remove();
  });
  event.preventDefault();
});
