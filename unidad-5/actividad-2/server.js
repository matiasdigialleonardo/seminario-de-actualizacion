const express = require('express');
const path = require('path');
const http = require('http');

const users =
[
    {
        id: 1,
        username: 'usuario',
        password: 'contraseña',
    },
    {
        id: 2,
        username: 'b',
        password: 'b',
    },
]

class Model {
    constructor() {
        // Initialization
        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use(express.json());

        this.taskData = new Map();

        this.taskData.set("1", { id: "1", task_content: "Task Example 1 (Uncompleted)", completed: false });
        this.taskData.set("2", { id: "2", task_content: "Task Example 2 (Completed)", completed: true });

        this.lastId = 2;

        // settings
        this.app.set('port', process.env.PORT || 3000);

        // static files
        this.app.use(express.static(path.join((__dirname), 'public')));

        this.app.post('/login', (req, res) => {
            const { username, password } = req.body;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {

                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });

        this.app.post('/api/getAllTasks', (req, res) => {
            res.status(200).json(Array.from(this.taskData.values()));
        });

        this.app.post('/api/addTask', (req, res) => {

            const { task_content } = req.body;

            const newId = this.getNextId();

            const newTask = {
                id: newId,
                task_content,
                completed: false
            };

            this.taskData.set(newId, newTask); 

            res.status(200).json(newTask);
        });

        this.app.post('/api/removeTask', (req, res) => {

            const { taskId } = req.body;

            this.taskData.delete(taskId);

            res.status(200).json({ message: "task removed" });
        });

        this.app.post('/api/updateTaskStatus', (req, res) => {

            const { taskId, newStatus } = req.body;

            let task = this.getTask(taskId);

            task.completed = newStatus;

            res.status(200).json({ message: "task updated" });
        });

    }

    getTask(taskId)
    {
        return this.taskData.get(taskId);
    }

    getNextId()
    {
        this.lastId++; 
        
        return String(this.lastId);
    }

    run() {
        this.server.listen(this.app.get('port'), () => {
            console.log('Server on port 3000')
        })
    }
}

let model = new Model();

model.run();