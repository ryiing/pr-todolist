import './style.css';

let tasks = []

function task (title, description, duedate, prio) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.prio = prio;
}

const addNewTask = (() => {
    const logNewTask = (() => {
        const taskTitle = document.getElementById('newtitle').value;
        const taskDescription = document.getElementById('newdescription').value;
        const taskDueDate = document.getElementById('newduedate');
        const taskPrio = document.getElementById('newprio');
        
        const newTask = new task (taskTitle, taskDescription, taskDueDate, taskPrio);
        tasks.push(newTask);
    });

    return {
        logNewTask
    };
})();


const updateScreen = (() => {

})();

const btnAddTask = document.getElementById('addTask');
const taskModal = document.getElementById('taskModal');

btnAddTask.addEventListener('click', () => {
    console.log('test');
    taskModal.showModal();
});

const testBtn = document.getElementById('test');
testBtn.addEventListener('click', () => {
    addNewTask.logNewTask();
});