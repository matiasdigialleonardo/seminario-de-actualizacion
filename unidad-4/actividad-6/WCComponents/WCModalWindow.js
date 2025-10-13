class WCModalWindow extends HTMLElement
{
	constructor()
	{
		super();

		// Should modal be just 'this', as in, the class itself?
		this.classList.add('w3-modal');

		this.modalContent = document.createElement('div');
		this.modalContent.classList.add('w3-modal-content');

		this.modalContainer = document.createElement('div');
		this.modalContainer.classList.add('w3-container');

		this.closeModalBtn = document.createElement('span');
		this.closeModalBtn.classList.add('w3-button', 'w3-display-topright');
		this.closeModalBtn.textContent = 'x';

		this.modalContent.appendChild(this.closeModalBtn);

		this.modalContent.appendChild(this.modalContainer);

		
	}

	clearContent()
	{
	    while (this.modalContainer.firstChild) {
	        this.modalContainer.removeChild(this.modalContainer.firstChild);
	    }
	}

	setContent(content)
	{
		this.clearContent();
		this.modalContainer.appendChild(content);
	}

	show()
	{
		this.style.display = 'block';
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