import { WCModalDialog } from './WCComponents/WCModalDialog.js';

function main()
{
	let wcmodaldialog = new WCModalDialog();

	let modalDialogWCtitle = document.createElement('h2');
	modalDialogWCtitle.textContent = 'W3.CSS Modal';

	let openModalDialogWCbtn = document.createElement('button');
	openModalDialogWCbtn.textContent = 'Open Modal';

	document.body.append(modalDialogWCtitle);
	document.body.append(openModalDialogWCbtn);

	document.body.append(wcmodaldialog);

	openModalDialogWCbtn.onclick = function()
	{
		wcmodaldialog.modal.style.display = 'block';
	}
}

window.onload = main;