import { LoginController } from "./loginController.js";

class Controller
{
	constructor( _viewInstance, _modelInstance )
	{
		this.viewInstance = _viewInstance;
		this.modelInstance = _modelInstance;

		this.loginController = new LoginController(this.viewInstance.getViewMyName("login"), this.modelInstance )

		this.modelInstance.addEventListener('task_added', this.updateTaskList.bind(this));
		this.modelInstance.addEventListener('task_removed', this.updateTaskList.bind(this));
		this.modelInstance.addEventListener('task_status_changed', this.updateTaskList.bind(this));
		this.modelInstance.addEventListener('tasks_updated', this.renderTasks.bind(this));

		this.modelInstance.addEventListener("userLogged", () => {
            this.viewInstance.renderView("toDoList");
			this.updateTaskList();
        })

        this.loginController.init();
	}

	init() //on / enable
	{
		console.log('Initializing controller...');
	}

	release() //off  / disable
	{
		console.log('Releasing controller...');
	}

	run()  //solo por cuestiones de asincronía
	{

	}

	stop()
	{

	}

	onAddTaskBtnClick(event)
	{
		let taskContent = this.viewInstance.taskInput.value;

		this.modelInstance.addTask(taskContent);
	}

	onRemoveTaskBtnClick(event)
	{
		const taskElement = event.target.parentElement;
		
		const taskId = taskElement.dataset.id;
		
		this.modelInstance.removeTask(taskId);
    }

	onCheckTaskBtnClick(event)
	{
		const checkbox = event.target;

		const taskElement = event.target.parentElement;

		const taskId = taskElement.dataset.id;

		const newStatus = checkbox.checked;

		this.modelInstance.updateTaskStatus(taskId, newStatus);
	}

	updateTaskList()
	{
		this.modelInstance.updateTasks();
	}

	renderTasks()
	{
		let tasks = this.modelInstance.getAllTasks();

		this.viewInstance.renderList(tasks);
	}

}

export { Controller };