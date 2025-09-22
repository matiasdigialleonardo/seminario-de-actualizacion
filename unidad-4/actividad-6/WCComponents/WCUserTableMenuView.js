class WCUserTableMenuView extends HTMLElement
{
	constructor()
	{
		super();

		this.populateTableBtn = document.createElement('button');
		this.clearBtn = document.createElement('button');

		this.populateTableBtn.innerText = 'Popular tabla';
		this.clearBtn.innerText = 'Limpiar';

		this.appendChild(this.populateTableBtn);
		this.appendChild(this.clearBtn);
	}

	connectedCallback()
	{
		this.populateTableBtn.addEventListener('click', () => {
			this.dispatchEvent(new CustomEvent('populateTableBtnClicked', {}));
		})

		this.clearBtn.addEventListener('click', () => {
			this.dispatchEvent( new CustomEvent('clearBtnClicked', {}));
		})
	}
}

customElements.define('x-wcusertablemenuview', WCUserTableMenuView );

export { WCUserTableMenuView };