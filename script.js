const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask() {
    if (inputBox.value === '') {
        alert("unable to add empty task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savetoDos();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savetoDos();
    }
}, false);

function savetoDos() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function loadtasks() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
loadtasks();