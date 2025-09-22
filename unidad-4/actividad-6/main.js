import { WCFetchAPI } from './WCComponents/WCFetchAPI.js';
import { WCUserTableMenuView } from './WCComponents/WCUserTableMenuView.js';
import { WCUserTableMenuController } from './WCComponents/WCUserTableMenuController.js';

function main()
{
	let menuView = new WCUserTableMenuView();
	let fetchApi = new WCFetchAPI();
	let menuController = new WCUserTableMenuController(menuView, fetchApi);

}

window.onload = main;