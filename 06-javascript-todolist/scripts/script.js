const todoList = [
  "Belajar HTML dan CSS",
  "Belajar Git dan GitHub",
  "Belajar JavaScript",
  "Belajar NodeJS",
  "Belajar React",
];

// menambahkan
document.forms["form"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["form"]["todo"].value;
  todoList.push(todo);

  document.forms["form"].reset();

  console.info(todoList);

  displayTodoList();
};
displayTodoList();

// membuat element
function addTodoList(index, todo) {
  const div = document.createElement("div");
  div.setAttribute("class", "desc");

  const btnDone = document.createElement("button");
  btnDone.setAttribute("class", "btn");
  btnDone.textContent = "Done";
  div.appendChild(btnDone);

  // remove todolist
  btnDone.onclick = function () {
    removeTodoList(index);
  };

  const p = document.createElement("p");
  p.textContent = todo;
  div.appendChild(p);

  const descriptions = document.getElementById("descriptions");
  descriptions.appendChild(div);
}

// menghapus todolist
function removeTodoList(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

// menampilkan
function displayTodoList() {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const searchText = document.getElementById("filter").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
}

// menghapus sebelum menampilkan
function clearTodoList() {
  const descriptions = document.getElementById("descriptions");
  while (descriptions.firstChild) {
    descriptions.removeChild(descriptions.firstChild);
  }
}

// filter
const searchInput = document.getElementById("filter");
searchInput.onkeyup = function () {
  displayTodoList();
};
searchInput.onkeydown = function () {
  displayTodoList();
};
