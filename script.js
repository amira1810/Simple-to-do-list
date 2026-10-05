const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


// Ajouter une nouvelle tâche
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {

    const taskText = taskInput.value.trim();

    // Ne rien faire si l'input est vide
    if (taskText === "") {
        alert(" You must input something !");
        return;
    }

    // Créer le <li>
    const li = document.createElement("li");

    // Créer le texte de la tâche
    const span = document.createElement("span");
    span.textContent = taskText;

    // Créer le bouton X
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "×";
    deleteButton.classList.add("delete");

    // Ajouter texte + X dans le li
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Ajouter la tâche dans la liste
    taskList.appendChild(li);

    // Vider l'input
    taskInput.value = "";
    saveData();
    
}


// Cliquer sur une tâche
taskList.addEventListener("click", function(event) {

    // Si on clique sur le X
    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();
        saveData();
        

    } 
    
    // Si on clique sur la tâche
    else if (event.target.tagName === "SPAN") {

        event.target.parentElement.classList.toggle("checked");
        saveData();
        

    }

});

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
    