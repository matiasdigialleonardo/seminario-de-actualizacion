const express = require('express');
const path = require('path');
const http = require('http');

const users =
[
    {
        id: 1,
        username: 'user',
        password: 'password',
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

        this.tokenData = new Map();
        this.TOKEN_EXPIRATION_TIME = 60 * 60 * 1000;
    
        this.taskData = new Map();
        this.taskData.set("1", { id: "1", task_content: "Task Example 1 (Uncompleted)", completed: false });
        this.taskData.set("2", { id: "2", task_content: "Task Example 2 (Completed)", completed: true });

        this.lastId = 2;

        // settings
        this.app.set('port', process.env.PORT || 3000);

        // static files
        this.app.use(express.static(path.join((__dirname), 'public')));

        this.app.post('/api/login', (req, res) => {
            const { username, password } = req.body;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {

                let auth_token = this.generateToken();
                let tokenExpirationDate = Date.now() + this.TOKEN_EXPIRATION_TIME;

                this.tokenData.set(auth_token, tokenExpirationDate)

                let cookieString = `auth_token=${auth_token}; HttpOnly; Path=/;`;
                res.setHeader('Set-Cookie', cookieString);

                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });

        this.app.post('/api/getAllTasks', (req, res) => {
            
            if (!this.checkTokenIsValid(req)) return;

            res.status(200).json(Array.from(this.taskData.values()));
        });

        this.app.post('/api/addTask', (req, res) => {
            
            if (this.checkTokenIsValid(req))
            {
                const { task_content } = req.body;

                const newId = this.getNextId();

                const newTask = {
                    id: newId,
                    task_content,
                    completed: false
                };

                this.taskData.set(newId, newTask); 

                return res.status(200).json(newTask);
            }

            res.status(400).json({ message: 'Invalid token.' });

        });

        this.app.post('/api/removeTask', (req, res) => {
            
            if (this.checkTokenIsValid(req))
            {
                const { taskId } = req.body;

                this.taskData.delete(taskId);

                return res.status(200).json({ message: "task removed" });             
            };

            res.status(400).json({ message: 'Invalid token.' });
        });

        this.app.post('/api/updateTaskStatus', (req, res) => {
            
            if (this.checkTokenIsValid(req))
            {
                const { taskId, newStatus } = req.body;

                let task = this.getTask(taskId);

                task.completed = newStatus;

                return res.status(200).json({ message: "task updated" });         
            };

            res.status(400).json({ message: 'Invalid token.' });
        });

    }

    // Actividad 3
    // function to check credentials on every request
    // checkCredentials(req, res) {
    //     const { username, password } = req.body; 
        
    //     let user = users.find(u => u.username === username && u.password === password);

    //     if (user) {
    //         return true;
    //     } else {
    //         res.status(401).json({ message: 'Invalid credentials.' });
    //         return false;
    //     }
    // }

    // Actividad 4/5
    checkTokenIsValid(req) {

        let cookies = this.parseCookies(req);

        let token = cookies.auth_token;;

        let currentDate = Date.now();
        let tokenExpirationDate = this.tokenData.get(token);

        if (currentDate < tokenExpirationDate)
        {
            return true;
        }

        this.tokenData.delete(token);

        return false;
    }

    // Actividad 5
    parseCookies(req) {
        let list = {};
        let cookieHeader = req.headers.cookie;

        if (!cookieHeader) return list;

        cookieHeader.split(';').forEach(cookie => {
            let [name, ...rest] = cookie.split('=');
            name = name.trim();
            if (!name) return;
            let value = rest.join('=').trim();
            list[name] = decodeURIComponent(value);
        });

        return list;
    }

    // Actividad 6
    generateToken()
    {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
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