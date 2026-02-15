const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // Mark complete
    li.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle("completed");
        }
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
