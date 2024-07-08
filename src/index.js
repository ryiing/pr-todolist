import './style.css';

let tasks = [];

const btnAddTask = document.getElementById('addTask');
const taskModal = document.getElementById('taskModal');

btnAddTask.addEventListener('click', () => {
    console.log('test');
    taskModal.showModal();
});

const addNewTask = (() => {
    
});