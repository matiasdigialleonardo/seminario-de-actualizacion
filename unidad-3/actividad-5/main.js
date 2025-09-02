import { WCModalWindow } from './WCComponents/WCModalWindow.js';
import { WCContactForm } from './WCComponents/WCContactForm.js';

function main()
{
	let wcContactForm = new WCContactForm();
	let wcModalWindow = new WCModalWindow(wcContactForm);

	let openModalDialogWCbtn = document.createElement('button');
	openModalDialogWCbtn.textContent = 'Contáctenos';
	openModalDialogWCbtn.style.position = "absolute";
	openModalDialogWCbtn.style.top = "50%";
	openModalDialogWCbtn.style.left = "50%";
	openModalDialogWCbtn.style.transform = "translate(-50%, -50%)";

	document.body.append(openModalDialogWCbtn);

	document.body.append(wcModalWindow);

	openModalDialogWCbtn.onclick = function()
	{
		wcModalWindow.style.display = 'block';
	}

}

window.onload = main;