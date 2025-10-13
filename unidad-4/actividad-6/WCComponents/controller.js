class Controller
{
	constructor( _viewInstance, _modelInstance )
	{
		this.viewInstance = _viewInstance;
		this.modelInstance = _modelInstance;
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

    async onPopulateTableButtonClick(event)
    {
        let response = await this.modelInstance.getUsersData();
        this.viewInstance.populateTable(response);
    }

    async onRowClick(event)
    {
        let currentRow = event.currentTarget;
        let userId = currentRow.cells[0].textContent;

        let userData = await this.modelInstance.getUserData(userId);
        this.viewInstance.showUserRow(userData);
    }

	onButtonTestClick(event)
	{
		let response = this.modelInstance.getData();
		this.viewInstance.update(response);
	}
}

export { Controller };