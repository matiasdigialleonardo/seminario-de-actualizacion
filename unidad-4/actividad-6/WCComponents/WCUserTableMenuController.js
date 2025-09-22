class WCUserTableMenuController {
    constructor(view, model) 
    {
        this.view = view;
        this.model = model;

        document.body.appendChild(this.view);
    }

    init()
    {
    	this.view.addEventListener('populateTableBtnClicked', function(e) {
    		this.model.populateTable();
    	}.bind(this));

    }
}

export { WCUserTableMenuController };