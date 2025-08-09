import { WCModalWindow } from './WCComponents/WCModalWindow.js';
import { WCContactForm } from './WCComponents/WCContactForm.js';

function main()
{
	let wcContactForm = new WCContactForm();
	let wcModalWindow = new WCModalWindow(wcContactForm);

	let modalDialogWCtitle = document.createElement('h2');
	modalDialogWCtitle.textContent = 'W3.CSS Modal';

	let openModalDialogWCbtn = document.createElement('button');
	openModalDialogWCbtn.textContent = 'Open Modal';

	document.body.append(modalDialogWCtitle);
	document.body.append(openModalDialogWCbtn);

	document.body.append(wcModalWindow);

	openModalDialogWCbtn.onclick = function()
	{
		wcModalWindow.style.display = 'block';
	}

}

window.onload = main;