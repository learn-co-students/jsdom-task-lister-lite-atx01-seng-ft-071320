document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("form-submit").addEventListener("click", function(event){
    event.preventDefault();
    addListItem();
  });
});



function addListItem() {
  const inputValue = document.getElementById("new-task-description").value;
  const ul = document.getElementById('tasks');
  const li = document.createElement('li');
  li.innerHTML = inputValue;
  ul.appendChild(li);
}
