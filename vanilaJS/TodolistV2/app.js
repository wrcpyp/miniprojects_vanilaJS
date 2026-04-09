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
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed}
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
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    p.textContent = task.text;
    delBtn.textContent = "Delete";
    showTaskDiv.appendChild(p);
    p.appendChild(delBtn);
    p.prepend(checkbox)

    delBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    checkbox.addEventListener("change", () => {
        toggleTask(task.id)
    })

    if (task.completed) {
        p.style.textDecoration = "line-through"
    }
  });
}

document.querySelector(".addTaskBtn").addEventListener("click", () => {
  addTask(input.value);
});
