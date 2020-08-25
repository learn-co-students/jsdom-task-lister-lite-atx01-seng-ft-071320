document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleSubmit);
});


function handleSubmit(e) {
  e.preventDefault();
  addTask(e.target['new-task-description'].value); //check the arg in console.log first!
  document.getElementById('new-task-description').value = '';
}

function addTask(task) {
  const list = document.getElementById('tasks');

  const item = document.createElement('li');
  item.innerText = task;

  // const deleteButton = document.createElement('button');
  // deleteButton.innerText = '[X]';
  // deleteButton.addEventListener('click', () => item.remove());


  // item.append(deleteButton);
  list.append(item);
}

