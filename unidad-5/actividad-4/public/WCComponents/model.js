const BASE_URL = "http://localhost:3000/api"

class Model extends EventTarget
{
    constructor()
	{

        super();

        this.taskData = new Map();

        this.username;
        this.password;
        this.ACTIVE_TOKEN;


    }

    async logUser(username, password) {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            // Check the response data to see if the user and password are ok.
            // Response ok only says that the response was satisfactory.
            if (response.ok) {

                this.username = username;
                this.password = password;
                this.ACTIVE_TOKEN = 'data.token';

                this.dispatchEvent(new CustomEvent("userLogged", {}));
                
            }

        // Dispatch error informing about an invalid login (later).
        } catch (error) {
            console.error('Error logging in:', error);
            return false;
        }
    }

    getCredentials()
    {
        return { username:this.username, password:this.password };
    }

    async addTask(taskContent)
    {
        let response = await fetch(`${BASE_URL}/addTask`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-auth-token': this.ACTIVE_TOKEN 
            },
            body: JSON.stringify({ 
                    username: this.username,
                    password: this.password,
                    task_content: taskContent 
                }
            )
        });

        let newTask = await response.json();

        this.taskData.set(newTask.id, newTask);

        this.dispatchEvent(new CustomEvent('task_added', {}));

    }

    async removeTask(taskId)
    {
        let response = await fetch(`${BASE_URL}/removeTask`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-auth-token': this.ACTIVE_TOKEN 
            },
            body: JSON.stringify({ 
                username: this.username,
                password: this.password,
                taskId: taskId }
            )
        });

        this.dispatchEvent(new CustomEvent('task_removed', {}));
    }

    async updateTaskStatus(taskId, newStatus)
    {
        let response = await fetch(`${BASE_URL}/updateTaskStatus`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-auth-token': this.ACTIVE_TOKEN 
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password,
                taskId: taskId, newStatus: newStatus 
            }
        )
        });

        let event = new CustomEvent('task_status_changed', {});

        this.dispatchEvent(event);
    }

    async updateTasks()
    {
        let response = await fetch(`${BASE_URL}/getAllTasks`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-auth-token': this.ACTIVE_TOKEN 
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password,
                }
            )
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