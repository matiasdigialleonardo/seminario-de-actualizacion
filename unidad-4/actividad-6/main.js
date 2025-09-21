import { WCFetchAPI } from './WCComponents/WCFetchAPI.js';
import { WCUserTable } from './WCComponents/WCUserTable.js';

function main()
{
  let userTable = new WCUserTable();
  document.body.appendChild(userTable);
}

window.onload = main;