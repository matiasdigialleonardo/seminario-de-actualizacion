import { WCFetchAPI } from './WCComponents/WCFetchAPI.js';
import { WCUserTable } from './WCComponents/WCUserTable.js';

function main()
{

  async function initializeTable()
  {
	let response = await fetch('https://jsonplaceholder.typicode.com/users/');
	let data = await response.json();

	let userTable = new WCUserTable();
	userTable.populateTable(data);
	document.body.appendChild(userTable);
  }

  initializeTable();



}

window.onload = main;