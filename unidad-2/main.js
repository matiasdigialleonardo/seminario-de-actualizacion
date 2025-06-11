import { ApplicationModel } from './ApplicationModel.js';
import { Application } from './Application.js';


function main()
{
	let app = new Application();

	app.init();
	app.run();

}

window.onload = main;