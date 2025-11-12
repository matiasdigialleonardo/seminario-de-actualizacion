const BASE_URL = "http://localhost:3000/api"

class Model extends EventTarget
{
    constructor()
	{

        super();

        this.taskData = new Map();

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

            if (response.ok) {

                this.dispatchEvent(new CustomEvent("userLogged", {}));                
            }

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
            },
            body: JSON.stringify({ 
                    task_content: taskContent 
                }
            )
        });

        if (response.status == 200)
        {
            this.dispatchEvent(new CustomEvent('task_added', {}));
        }
        else if (response.status == 400 )
        {
            console.log("Invalid token.")
        }
        else
        {
            console.log("Unknown error ocurred.")
        }
    }

    async removeTask(taskId)
    {
        let response = await fetch(`${BASE_URL}/removeTask`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                taskId: taskId }
            )
        });

        if (response.status == 200)
        {
            this.dispatchEvent(new CustomEvent('task_removed', {}));
        }
        else if (response.status == 400 )
        {
            console.log("Invalid token.")
        }
        else
        {
            console.log("Unknown error ocurred.")
        }
    }

    async updateTaskStatus(taskId, newStatus)
    {
        let response = await fetch(`${BASE_URL}/updateTaskStatus`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                taskId: taskId, newStatus: newStatus 
            }
        )
        });

        if (response.status == 200)
        {
            this.dispatchEvent(new CustomEvent('task_status_changed', {}));

        }
        else if (response.status == 400 )
        {
            console.log("Invalid token.")
        }
        else
        {
            console.log("Unknown error ocurred.")
        }
    }

    async updateTasks()
    {
        let response = await fetch(`${BASE_URL}/getAllTasks`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });

        if (response.status == 200)
        {
            let tasksArray = await response.json();

            this.taskData.clear();
            tasksArray.forEach(task => {
                this.taskData.set(task.id, task);
            });

            this.dispatchEvent(new CustomEvent('tasks_updated'));
        }
        else if (response.status == 400 )
        {
            console.log("Invalid token.")
        }
        else
        {
            console.log("Unknown error ocurred.")
        }


    }

    getAllTasks()
    {
        return this.taskData;
    }

}

export { Model };