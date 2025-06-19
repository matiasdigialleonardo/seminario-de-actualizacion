import { ApplicationUi } from './ApplicationUi.js';
import { ApplicationModel } from './ApplicationModel.js';

class Application
{
	constructor()
	{
		this._api = new ApplicationModel();
		this._defaultView = new ApplicationUi(this._api);		
		this._api_return = null;
	}

	init() {};

	run()
	{
		this._defaultView.show();
	}
}

export { Application };