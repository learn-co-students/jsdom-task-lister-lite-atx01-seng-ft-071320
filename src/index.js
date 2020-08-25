document.addEventListener("DOMContentLoaded", () => {
});

const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", function(event) {
  const task = document.createElement("li");
  task.innerHTML = `${form.elements[0].value}`;
  ul.appendChild(task);
  const button = document.createElement("BUTTON");
  button.innerHTML = "x";
  task.appendChild(button);
  button.addEventListener("click", function(event) {
    task.remove();
  });
  event.preventDefault();
});


