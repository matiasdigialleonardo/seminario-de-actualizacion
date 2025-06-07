import { ApplicationUi } from './ApplicationUi.js';

class Application
{
	constructor( apiInstanceObject )
	{
		this._api = apiInstanceObject;
		this._defaultView = new ApplicationUi(this._api);		
		this._api_return = null;
	}

	init() {}

	run()
	{
		this._defaultView.show();
	}
}

export { Application };