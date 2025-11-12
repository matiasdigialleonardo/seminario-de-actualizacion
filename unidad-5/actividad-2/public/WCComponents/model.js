const BASE_URL = "http://localhost:3000/api"

class Model extends EventTarget
{
    constructor()
	{

        super();

        this.taskData = new Map();


    }

    // async getUsersData()
    // {
    //     let response = await fetch('https://jsonplaceholder.typicode.com/users/');
    //     let response_json = await response.json();

    //     return response_json;
    // }

    async addTask(taskContent)
    {
        let response = await fetch(`${BASE_URL}/addTask`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task_content: taskContent })
        });

        let newTask = await response.json();

        this.taskData.set(newTask.id, newTask);

        this.dispatchEvent(new CustomEvent('task_added', {}));

    }

    async removeTask(taskId)
    {
        let response = await fetch(`${BASE_URL}/removeTask`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskId: taskId })
        });

        this.dispatchEvent(new CustomEvent('task_removed', {}));
    }

    async updateTaskStatus(taskId, newStatus)
    {
        let response = await fetch(`${BASE_URL}/updateTaskStatus`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskId: taskId, newStatus: newStatus })
        });

        let event = new CustomEvent('task_status_changed', {});

        this.dispatchEvent(event);
    }

    async updateTasks()
    {
        let response = await fetch(`${BASE_URL}/getAllTasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });

        let tasksArray = await response.json();

        this.taskData.clear();
        tasksArray.forEach(task => {
            this.taskData.set(task.id, task);
        });

        this.dispatchEvent(new CustomEvent('tasks_updated'));

    }

    getAllTasks()
    {
        return this.taskData;
    }

}

export { Model };