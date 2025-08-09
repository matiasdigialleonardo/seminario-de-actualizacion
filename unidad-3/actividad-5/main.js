import { WCContactForm } from './WCComponents/WCContactForm.js';

function main()
{
	let wcContactForm = new WCContactForm();

	let modalDialogWCtitle = document.createElement('h2');
	modalDialogWCtitle.textContent = 'W3.CSS Modal';

	let openModalDialogWCbtn = document.createElement('button');
	openModalDialogWCbtn.textContent = 'Open Modal';

	document.body.append(modalDialogWCtitle);
	document.body.append(openModalDialogWCbtn);

	document.body.append(wcContactForm);

	openModalDialogWCbtn.onclick = function()
	{
		wcContactForm.modal.style.display = 'block';
	}

}

window.onload = main;