import { WCUserTable } from './WCComponents/WCUserTable.js';
import { WCAddressTable } from './WCComponents/WCAddressTable.js';

class WCTableMenuView extends HTMLElement
{
	constructor()
	{
		super();

		this.appendChild(userTable);
	}

}