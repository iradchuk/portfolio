const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTaskButton = document.querySelector('button');

inputBox.addEventListener('keypress', (event)=> {
    if (event.key === "Enter") {
        event.preventDefault();
        addTaskButton.click();
    }
})

addTaskButton.addEventListener('click', ()=> {
    if (inputBox.value == '') {
        alert('Field is empty');
    } else {
        addTask();
    }  
})


function addTask() {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = '';
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    saveData();
}

listContainer.addEventListener('click', (e)=> {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();