import { Controller } from './Controller.js';

class View extends HTMLElement
{
  constructor( modelInstance )
  {
    super();
    
    this.innerController = new Controller(this, modelInstance );

    this.appContainer = document.createElement('div');
    this.appContainer.className = 'todo-app';
    
    const title = document.createElement('h2');
    title.textContent = "To-Do List";

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    
    this.taskInput = document.createElement('input');
    this.taskInput.type = 'text';
    this.taskInput.className = 'task-input';
    this.taskInput.placeholder = 'Add task';
    
    this.addTaskBtn = document.createElement('button');
    this.addTaskBtn.className = 'add-button';
    this.addTaskBtn.textContent = 'ADD';

    inputContainer.appendChild(this.taskInput);
    inputContainer.appendChild(this.addTaskBtn);

    this.taskList = document.createElement('ul');
    this.taskList.className = 'task-list';

    this.appContainer.appendChild(title);
    this.appContainer.appendChild(inputContainer);
    this.appContainer.appendChild(this.taskList);
    
    this.appendChild(this.appContainer);

  }

  renderList(tasks)
  {
    this.clearTasksList(); 
    tasks.forEach(task => {
        this.taskList.appendChild(this.createTaskElement(task));
    });
  }

  createTaskElement(task)
  {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;
    
    if (task.completed)
    {
        li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox'; 
    checkbox.checked = task.completed;
    
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = task.task_content;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);


    checkbox.onclick = this.innerController.onCheckTaskBtnClick.bind(this.innerController);
    deleteBtn.onclick = this.innerController.onRemoveTaskBtnClick.bind(this.innerController);

    return li;
  }

  clearTasksList()
  {
    while (this.taskList.firstChild)
    {
        this.taskList.removeChild(this.taskList.firstChild);
    }
  }


  connectedCallback()
  {
    this.addTaskBtn.onclick = this.innerController.onAddTaskBtnClick.bind(this.innerController);

    this.innerController.updateTaskList();
  }

  disconnectedCallback()
  {

  }

}

customElements.define('wc-todoview', View);

export { View };