const addTaskDom = document.querySelector("#addTask")
const searchTaskDom = document.querySelector("#searchTask")
const showTasksDiv = document.querySelector(".showTasks")
const tasksAmount = document.querySelector(".amount")
let amount = 0

document.querySelector(".addTaskBtn").addEventListener("click", () => {
    const createP = document.createElement("p")
    const createEditBtn = document.createElement("button")
    const createDelBtn = document.createElement("button")
    const createCheckbox = document.createElement("input")
    createCheckbox.type = "checkbox"
    createEditBtn.classList.add("editBtn")
    createDelBtn.classList.add("delBtn")
    createDelBtn.innerHTML = "Delete"
    createEditBtn.innerHTML = "Edit"
    createP.innerHTML = addTaskDom.value
    createP.prepend(createCheckbox)
    createP.appendChild(createEditBtn)
    createP.appendChild(createDelBtn)
    showTasksDiv.appendChild(createP)
    amount++
    tasksAmount.innerHTML = amount

    createCheckbox.addEventListener("change", () => {
        if (createCheckbox.checked) {
            createP.classList.add("done")
        } else {
            createP.classList.remove("done")
        }
    })

    createDelBtn.addEventListener("click", () => {
        createP.innerHTML = ""
        amount--
        tasksAmount.innerHTML = amount
    })
})

document.querySelector(".clearBtn").addEventListener("click", () => {
    showTasksDiv.innerHTML = ""
    addTaskDom.value = ""
    amount = 0
    tasksAmount.innerHTML = amount
})