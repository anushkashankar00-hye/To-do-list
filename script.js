const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const dateBox = document.getElementById("date");
const greeting = document.getElementById("greeting");
const studentName = document.getElementById("studentName");

// Show Date
const today = new Date();
dateBox.innerText = "📅 " + today.toDateString();

// Save Name
function saveName(){
    if(studentName.value !== ""){
        greeting.innerText = "Hello " + studentName.value + " 👋";
        localStorage.setItem("name", studentName.value);
    }
}

// Load Data on Refresh
window.onload = function(){

    const savedName = localStorage.getItem("name");

    if(savedName){
        greeting.innerText = "Hello " + savedName + " 👋";
    }

    loadTasks();
}

// Add Task
function addTask(){

    if(taskInput.value === ""){
        alert("Please enter today's study task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskInput.value;

    // Complete task
    li.onclick = function(){
        li.classList.toggle("completed");
        saveTasks();
    }

    // Delete button
    let span = document.createElement("span");
    span.innerHTML = "✖";

    span.onclick = function(){
        li.remove();
        saveTasks();
    }

    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = "";

    saveTasks();
}

// Save tasks
function saveTasks(){
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load tasks
function loadTasks(){
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}