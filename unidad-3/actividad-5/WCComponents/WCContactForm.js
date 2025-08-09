class WCContactForm extends HTMLElement
{
	constructor()
	{
		super();

		// <form action="/action_page.php" class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
		// <h2 class="w3-center">Contact Us</h2>
 		this.classList.add('w3-container', 'w3-card-4', 'w3-light-grey', 'w3-text-blue', 'w3-margin')

		// first name section

		this.firstNameSection = document.createElement('div');
		this.firstNameSection.classList.add('w3-row', 'w3-section');

		let firstNameSectionIconContainer = document.createElement('div');
		firstNameSectionIconContainer.classList.add('w3-col');
		firstNameSectionIconContainer.style.width = '50px';

		let firstNameSectionIcon = document.createElement('i');
		firstNameSectionIcon.classList.add('w3-xxlarge', 'fa', 'fa-user');

		let firstNameSectionInputContainer = document.createElement('div');
		firstNameSectionInputContainer.classList.add('w3-rest');

		let firstNameSectionInput = document.createElement('input');
		firstNameSectionInput.classList.add('w3-input', 'w3-border');
		firstNameSectionInput.setAttribute('name', 'first');
		firstNameSectionInput.setAttribute('type', 'text');
		firstNameSectionInput.setAttribute('placeholder', 'First Name');

		firstNameSectionIconContainer.appendChild(firstNameSectionIcon);
		firstNameSectionInputContainer.appendChild(firstNameSectionInput);

		this.firstNameSection.appendChild(firstNameSectionIconContainer);
		this.firstNameSection.appendChild(firstNameSectionInputContainer);

		// last name section

		this.lastNameSection = document.createElement('div');
		this.lastNameSection.classList.add('w3-row', 'w3-section');

		let lastNameSectionIconContainer = document.createElement('div');
		lastNameSectionIconContainer.classList.add('w3-col');
		lastNameSectionIconContainer.style.width = '50px';

		let lastNameSectionIcon = document.createElement('i');
		lastNameSectionIcon.classList.add('w3-xxlarge', 'fa', 'fa-user');

		let lastNameSectionInputContainer = document.createElement('div');
		lastNameSectionInputContainer.classList.add('w3-rest');

		let lastNameSectionInput = document.createElement('input');
		lastNameSectionInput.classList.add('w3-input', 'w3-border');
		lastNameSectionInput.setAttribute('name', 'last');
		lastNameSectionInput.setAttribute('type', 'text');
		lastNameSectionInput.setAttribute('placeholder', 'Last Name');

		lastNameSectionIconContainer.appendChild(lastNameSectionIcon);
		lastNameSectionInputContainer.appendChild(lastNameSectionInput);

		this.lastNameSection.appendChild(lastNameSectionIconContainer);
		this.lastNameSection.appendChild(lastNameSectionInputContainer);

		// email section

		this.emailSection = document.createElement('div');
		this.emailSection.classList.add('w3-row', 'w3-section');

		let emailSectionIconContainer = document.createElement('div');
		emailSectionIconContainer.classList.add('w3-col');
		emailSectionIconContainer.style.width = '50px';

		let emailSectionIcon = document.createElement('i');
		emailSectionIcon.classList.add('w3-xxlarge', 'fa', 'fa-envelope-o');

		let emailSectionInputContainer = document.createElement('div');
		emailSectionInputContainer.classList.add('w3-rest');

		let emailSectionInput = document.createElement('input');
		emailSectionInput.classList.add('w3-input', 'w3-border');
		emailSectionInput.setAttribute('name', 'email');
		emailSectionInput.setAttribute('type', 'text');
		emailSectionInput.setAttribute('placeholder', 'Email');

		emailSectionIconContainer.appendChild(emailSectionIcon);
		emailSectionInputContainer.appendChild(emailSectionInput);

		this.emailSection.appendChild(emailSectionIconContainer);
		this.emailSection.appendChild(emailSectionInputContainer);

		// phone section

		this.phoneSection = document.createElement('div');
		this.phoneSection.classList.add('w3-row', 'w3-section');

		let phoneSectionIconContainer = document.createElement('div');
		phoneSectionIconContainer.classList.add('w3-col');
		phoneSectionIconContainer.style.width = '50px';

		let phoneSectionIcon = document.createElement('i');
		phoneSectionIcon.classList.add('w3-xxlarge', 'fa', 'fa-phone');

		let phoneSectionInputContainer = document.createElement('div');
		phoneSectionInputContainer.classList.add('w3-rest');

		let phoneSectionInput = document.createElement('input');
		phoneSectionInput.classList.add('w3-input', 'w3-border');
		phoneSectionInput.setAttribute('name', 'phone');
		phoneSectionInput.setAttribute('type', 'text');
		phoneSectionInput.setAttribute('placeholder', 'Phone');

		phoneSectionIconContainer.appendChild(phoneSectionIcon);
		phoneSectionInputContainer.appendChild(phoneSectionInput);

		this.phoneSection.appendChild(phoneSectionIconContainer);
		this.phoneSection.appendChild(phoneSectionInputContainer);

		// message section

		this.messageSection = document.createElement('div');
		this.messageSection.classList.add('w3-row', 'w3-section');

		let messageSectionIconContainer = document.createElement('div');
		messageSectionIconContainer.classList.add('w3-col');
		messageSectionIconContainer.style.width = '50px';

		let messageSectionIcon = document.createElement('i');
		messageSectionIcon.classList.add('w3-xxlarge', 'fa', 'fa-pencil');

		let messageSectionInputContainer = document.createElement('div');
		messageSectionInputContainer.classList.add('w3-rest');

		let messageSectionInput = document.createElement('input');
		messageSectionInput.classList.add('w3-input', 'w3-border');
		messageSectionInput.setAttribute('name', 'message');
		messageSectionInput.setAttribute('type', 'text');
		messageSectionInput.setAttribute('placeholder', 'Message');

		messageSectionIconContainer.appendChild(messageSectionIcon);
		messageSectionInputContainer.appendChild(messageSectionInput);

		this.messageSection.appendChild(messageSectionIconContainer);
		this.messageSection.appendChild(messageSectionInputContainer);

		// button section

		this.sendFormButtonContainer = document.createElement('p');
		this.sendFormButtonContainer.classList.add('w3-center');

		this.sendFormButton = document.createElement('p');
		this.sendFormButton.classList.add('w3-button', 'w3-section', 'w3-blue', 'w3-ripple');
		this.sendFormButton.textContent = "Send";

		this.sendFormButtonContainer.appendChild(this.sendFormButton); 


	}

	onSendFormButtonClick(event)
	{
		window.alert('Su consulta fue recibida. A la brevedad lo contactaremos. Gracias');
	}


	connectedCallback()
	{
		//Se va a ejecutar siempre cuando el elemento es insertado en el DOM
		//DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

		this.appendChild(this.firstNameSection);
		this.appendChild(this.lastNameSection);
		this.appendChild(this.emailSection);
		this.appendChild(this.phoneSection);
		this.appendChild(this.messageSection);
		this.appendChild(this.sendFormButtonContainer);


		this.sendFormButton.onclick = this.onSendFormButtonClick.bind(this);

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

customElements.define('x-wccontactform', WCContactForm );

export { WCContactForm }