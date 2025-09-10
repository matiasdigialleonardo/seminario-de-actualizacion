class WCModalDialog extends HTMLElement
{
	constructor()
	{
		super();

		this.modalBackground = document.createElement('div');
		this.modalBackground.classList.add('w3-modal');

		let modalContent = document.createElement('div');
		modalContent.classList.add('w3-modal-content');

		// Inside this goes what you actually want to you
		let modalContainer = document.createElement('div');
		modalContainer.classList.add('w3-container');

		let first_text_span = document.createElement('span');
		let second_text_span = document.createElement('span');

		first_text_span.textContent = 'Some text. Some text. Some text.';
		second_text_span.textContent = 'Some text. Some text. Some text.';

		modalContainer.appendChild(first_text_span, second_text_span);

		modalContent.appendChild(modalContainer);

		this.modalBackground.appendChild(modalContent);

	}


	connectedCallback()
	{
		//Se va a ejecutar siempre cuando el elemento es insertado en el DOM
		//DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

		this.appendChild(this.modalBackground);

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

customElements.define('x-modaldialog', WCModalDialog );

export { WCModalDialog }