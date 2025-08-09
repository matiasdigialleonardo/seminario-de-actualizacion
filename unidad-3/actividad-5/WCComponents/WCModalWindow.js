class WCModalWindow extends HTMLElement
{
	constructor(content)
	{
		super();

		// Should modal be just 'this', as in, the class itself?
		this.classList.add('w3-modal');

		this.modalContent = document.createElement('div');
		this.modalContent.classList.add('w3-modal-content');

		let modalContainer = document.createElement('div');
		modalContainer.classList.add('w3-container');

		this.closeModalBtn = document.createElement('span');
		this.closeModalBtn.classList.add('w3-button', 'w3-display-topright');
		this.closeModalBtn.textContent = 'x';

		let modalFirstText =  document.createElement('p');
		modalFirstText.textContent = 'Some text. Some text. Some text.'

		let modalSecondText = document.createElement('p');
		modalSecondText.textContent = 'Some text. Some text. Some text.'

		modalContainer.appendChild(this.closeModalBtn);

		modalContainer.appendChild(content);

		this.modalContent.appendChild(modalContainer);

		
	}

	onCloseModalDialogBtnClick(event)
	{
		this.style.display = 'none';
	}


	connectedCallback()
	{
		//Se va a ejecutar siempre cuando el elemento es insertado en el DOM
		//DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

		this.appendChild(this.modalContent);

		this.closeModalBtn.onclick = this.onCloseModalDialogBtnClick.bind(this);

	}

	disconnectedCallback()
	{
		//Se va a ejecutar siempre que se quite el elemento del documento
	}

	adoptedCallback()
	{
		//Se va a ejecutar siempre que el elemento se cambie de documento.
	}

	connectedMoveCallback()
	{
		//Se ejecuta cuando se mueve el elemento dentro del DOM
	}

	static get observableAttributes()
	{
		//Solo para publicar cuáles son los atributos que tendría disponible el webcomponent
		//Si es utilizado a través de código HTML
		//Ejemplo: <mi-elemento sabor="acido"> </mi-elemento>

		return ['sabor']
	}

	attributeChangedCallback(attr, newvalue, oldvalue )
	{
		//Manejador de cambios de los valores de los atributos personalizados
	}
}

customElements.define('x-wcmodalwindow', WCModalWindow );

export { WCModalWindow }