import { ApplicationUi } from './ApplicationUi.js';

class Application
{
	constructor( apiInstanceObject )
	{
		this._api = apiInstanceObject;
		this._defaultView = new ApplicationUi(this._api);		
		this._api_return = null;
	}

	init()
	{
		this._api_return = this._defaultView.indexMenuView();
	}

	run()
	{
		while (this._api_return.result != 'EXIT')
		{
			if (this._api_return.result == 'USER_LOGGED')
			{
				while (this._api_return.result != 'EXIT')
				{
					this._api_return = this._defaultView.mainMenuView();
				}
			}
			else
			{
				this._api_return = this._defaultView.indexMenuView()();
			}
		}
	}
}

export { Application };