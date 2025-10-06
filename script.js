class Task{
    constructor(description){
        this.description = description
        this.completed = false;
    }

    toggleComplete(){
        this.completed = this.completed;
    }
}

class TaskMenager{
    constructor(){
        this.tasks = [];
    }
    addTask(description){
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTasks();
    }
    removeTask(index){
        this.tasks.splice(index,1);
        this.displayTasks();
    }
    toggleTaskCompletion(index){
        this.tasks[index].toggleComplete();
        this.displayTasks();
    }
    displayTasks(){
        const tasklist = document.getElementById('task-list');
        tasklist.innerHTML = '';

        this.tasks.forEach((task, index) =>{
            const taskItem = document.createElement('li')
            taskItem.className = task.completed ? 'compled' : '';

            const taskDescription = document.createElement('span');
        })
    }
}