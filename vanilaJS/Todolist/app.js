const addTaskDom = document.querySelector("#addTask")
const showTasksDiv = document.querySelector(".showTasks")
const tasksAmount = document.querySelector(".amount")
const completedTasksDiv = document.querySelector(".showCompletedTasks")

let amount = 0

document.querySelector(".addTaskBtn").addEventListener("click", () => {
    const createP = document.createElement("p")
    const createEditBtn = document.createElement("button")
    const createDelBtn = document.createElement("button")
    const createCheckbox = document.createElement("input")
    const textSpan = document.createElement("span")
    createCheckbox.type = "checkbox"
    createEditBtn.classList.add("editBtn")
    createDelBtn.classList.add("delBtn")
    textSpan.classList.add("textSpan")
    createDelBtn.innerHTML = "Delete"
    createEditBtn.innerHTML = "Edit"
    textSpan.innerHTML = addTaskDom.value
    createP.prepend(createCheckbox)
    createP.appendChild(textSpan)
    createP.appendChild(createEditBtn)
    createP.appendChild(createDelBtn)
    showTasksDiv.appendChild(createP)
    amount++
    tasksAmount.innerHTML = amount

    createCheckbox.addEventListener("change", () => {
        if (createCheckbox.checked) {
            completedTasksDiv.appendChild(createP)
        }
    })

    createDelBtn.addEventListener("click", () => {
        createP.remove()
        amount--
        tasksAmount.innerHTML = amount
    })

    let isEditing = false
    const textEdit = document.createElement("input")
    createEditBtn.addEventListener("click", () => {
        textSpan.style.display = "none"
        createP.insertBefore(textEdit, textSpan)
        textEdit.value = textSpan.innerHTML
        isEditing = true
    })

})

document.querySelector(".clearBtn").addEventListener("click", () => {
    showTasksDiv.innerHTML = ""
    completedTasksDiv.innerHTML = ""
    addTaskDom.value = ""
    amount = 0
    tasksAmount.innerHTML = amount

})

const completedTasksFilter = document.querySelector("#completedTasks")
completedTasksFilter.type = "checkbox"
document.querySelector("#completedTasks").addEventListener("change", () => {
    const h4 = document.querySelector(".showTasksTitle")
    if (completedTasksFilter.checked) {
        showTasksDiv.style.display = "none"
        h4.style.display = "none"
    } else {
        showTasksDiv.style.display = "block"
        h4.style.display = "block"
    }

})

const activeTasksFilter = document.querySelector("#activeTasks")
activeTasksFilter.type = "checkbox"
document.querySelector("#activeTasks").addEventListener("change", () => {
    const h4 = document.querySelector(".completedTasksTitle")
    if (activeTasksFilter.checked) {
        completedTasksDiv.style.display = "none"
        h4.style.display = "none"
    } else {
        completedTasksDiv.style.display = "block"
        h4.style.display = "block"
    }
})