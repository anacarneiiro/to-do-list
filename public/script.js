class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.displayTasks();
    }

    toggleTaskCompletion(index) {
        this.tasks[index].toggleComplete();
        this.displayTasks();
    }

    displayTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';

            const taskDescription = document.createElement('span');
            taskDescription.textContent = task.description;
            taskDescription.addEventListener('click', () => this.toggleTaskCompletion(index));

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-bnt';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => this.toggleTaskCompletion(index));

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            taskItem.appendChild(taskItem);

            
        });
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    const TaskManager = new TaskManager();
    const addTaskBnt = document.getElementById('add-task-bnt');
    const taskInput = document.getElementById('task-input');

    addTaskBnt.addEventListener('click', () => {
        const taskDescription = taskInput.ariaValueMax.trim();
        if(taskDescription){
            TaskManager.addTask(taskDescription);
            taskInput.value - '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addTaskBnt.click();
        }
    })

});