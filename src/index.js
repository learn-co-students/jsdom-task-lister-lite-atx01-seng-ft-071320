document.addEventListener("DOMContentLoaded", () => {
});

const colorSelector = document.querySelector("#color-change-selector");

const input = document.querySelector("#new-task-description");

const formVar = document.querySelector("form");



formVar.addEventListener("submit", function(event){

  const list = document.createElement('li');
  list.innerHTML = input.value;
  const task = document.getElementById("tasks");
  task.append(list);
  const button = document.createElement("button");
  button.innerHTML = "X";
  list.append(button);

  if (colorSelector.value === 'highPriority') {
    list.style.color = "red"
  } else if (colorSelector.value === 'mediumPriority') {
    list.style.color = "darkgoldenrod"
  } else { colorSelector.value === 'lowPriority' 
    list.style.color = "green"
  }

  button.addEventListener("click", function(){
    list.remove()
  });





  event.preventDefault();
  formVar.reset()
});


// document
  // .getElementById('create-task-form')
  // .addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//     addTask(e.target['new-task-description'].value);
//     document.getElementById('new-task-description').value = '';
// }

// function addTask(task) {
//   const list = document.getElementById('tasks');
//   const item = document.createElement('li');
//   item.innerText = task;

  // const deleteButton = document.createElement('button');
  // deleteButton.innerText = 'X';
  // deleteButton.addEventListener('click', () => item.remove());
  // item.append(deleteButton);

//   list.append(item);
// }
