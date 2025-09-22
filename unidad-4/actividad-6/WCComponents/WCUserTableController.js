class WCUserTableController {
    constructor(view, model) 
    {
        this.view = view;
        this.model = model;
    }

    init()
    {
    	this.model.addEventListener('populateTable', (e) => {
    		let data = event.detail.data;

    		console.log(data);
    	})

    }
}

export { WCUserTableController };