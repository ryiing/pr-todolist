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
        const newtaskTitleElement = document.getElementById('newtitle');
        const newtaskDescriptionElement = document.getElementById('newdescription');
        const newtaskDueDateElement = document.getElementById('newduedate');
        const newtaskPrioElement = document.getElementById('newprio');
    
        const newtaskTitle = newtaskTitleElement.value;
        const newtaskDescription = newtaskDescriptionElement.value;
        const newtaskDueDate = newtaskDueDateElement.value;
        const newtaskPrio = newtaskPrioElement.value;

        const newTask = new task (newtaskTitle, newtaskDescription, newtaskDueDate, newtaskPrio);
        tasks.push(newTask);

        newtaskTitleElement.value = '';
        newtaskDescriptionElement.value = '';
        newtaskDueDateElement.value = '';
        newtaskPrioElement.value = '';
    });
 
    return {
        logNewTask
    };
})();


const screenController = (() => {

    const createTaskDiv = ((index) => {
        const main = document.getElementById('main'); 

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskContainer');
    
        // const taskTitle = document.createElement('div');
        const taskDescription = document.createElement('div');
        const taskDueDate = document.createElement('div');
        const taskPrio = document.createElement('div');

        // taskTitle.innerHTML = 'test';
        // taskDiv.appendChild(taskTitle);
        
        taskDiv.appendChild(Object.assign(document.createElement('div'),{innerHTML: `Title: ` + tasks[index].title}));
        taskDiv.appendChild(Object.assign(document.createElement('div'),{innerHTML: `Description: ` + tasks[index].description}));
        taskDiv.appendChild(Object.assign(document.createElement('div'),{innerHTML: `DueDate: ` + tasks[index].duedate}));
        taskDiv.appendChild(Object.assign(document.createElement('div'),{innerHTML: `Priority: ` + tasks[index].prio}));
        main.appendChild(taskDiv);
    });

    const updateScreen = (() => {
        for (let i=0; i < tasks.length; i++) {
            createTaskDiv(i);
        }
    });

    return {
        updateScreen
    };

})();

const main = (() => {
    const btnAddTask = document.getElementById('addTask');
    const taskModal = document.getElementById('taskModal');
    const formAdd = document.getElementById('submit')
    
    btnAddTask.addEventListener('click', () => {
        console.log('test');
        taskModal.showModal();
    });
    
    const testBtn = document.getElementById('close');
    testBtn.addEventListener('click', () => {
        taskModal.close();
    });

    formAdd.addEventListener('click', () => {
        addNewTask.logNewTask();
        taskModal.close();
        screenController.updateScreen();
    });
});

main();

