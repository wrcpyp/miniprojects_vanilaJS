let tasks = [];
const input = document.querySelector("#addTask");

function addTask(text) {
  if (text.trim() === "") {
    return;
  } else {
    tasks.push({
      id: Date.now(),
      text,
      completed: false,
    });
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  render();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  render();
}

function editTask(id, newText) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {...task, text: newText}
    }
    return task
  })
  render()
}

const showTaskDiv = document.querySelector(".showTaskDiv");
function render() {
  showTaskDiv.innerHTML = "";
  input.value = "";

  tasks.forEach((task) => {
    const p = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const checkbox = document.createElement("input");
    const span = document.createElement("span")
    checkbox.type = "checkbox";
    span.textContent = task.text;
    editBtn.textContent = "Edit";
    delBtn.textContent = "Delete";
    showTaskDiv.appendChild(p);
    p.appendChild(span)
    p.appendChild(editBtn);
    p.appendChild(delBtn);
    p.prepend(checkbox);

    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task : ", task.text)
      if (newText === null || newText.trim() === "") {
        return
      }
      editTask(task.id, newText)
    })

    delBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
    });

    if (task.completed) {
      p.style.textDecoration = "line-through";
    }
  });
}

document.querySelector(".addTaskBtn").addEventListener("click", () => {
  addTask(input.value);
});
