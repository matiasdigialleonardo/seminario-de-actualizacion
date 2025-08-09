class WCContactForm extends HTMLElement
{
	constructor()
	{
		super();

		// Should modal be just 'this', as in, the class itself?
		this.modal = document.createElement('div');
		this.modal.classList.add('w3-modal');

		let modalContent = document.createElement('div');
		modalContent.classList.add('w3-modal-content');

		let modalContainer = document.createElement('div');
		modalContainer.classList.add('w3-container');

		this.closeModalBtn = document.createElement('span');
		this.closeModalBtn.classList.add('w3-button', 'w3-display-topright');
		this.closeModalBtn.textContent = 'x';

		// <form action="/action_page.php" class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
		// <h2 class="w3-center">Contact Us</h2>
 		let form = document.createElement('form');
 		form.classList.add('w3-container', 'w3-card-4', 'w3-light-grey', 'w3-text-blue', 'w3-margin')

		// first name section

		let firstNameSection = document.createElement('div');
		firstNameSection.classList.add('w3-row', 'w3-section');

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

		firstNameSection.appendChild(firstNameSectionIconContainer);
		firstNameSection.appendChild(firstNameSectionInputContainer);

		// last name section

		let lastNameSection = document.createElement('div');
		lastNameSection.classList.add('w3-row', 'w3-section');

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

		lastNameSection.appendChild(lastNameSectionIconContainer);
		lastNameSection.appendChild(lastNameSectionInputContainer);

		// email section

		let emailSection = document.createElement('div');
		emailSection.classList.add('w3-row', 'w3-section');

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

		emailSection.appendChild(emailSectionIconContainer);
		emailSection.appendChild(emailSectionInputContainer);

		// phone section

		let phoneSection = document.createElement('div');
		phoneSection.classList.add('w3-row', 'w3-section');

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

		phoneSection.appendChild(phoneSectionIconContainer);
		phoneSection.appendChild(phoneSectionInputContainer);

		// message section

		let messageSection = document.createElement('div');
		messageSection.classList.add('w3-row', 'w3-section');

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

		messageSection.appendChild(messageSectionIconContainer);
		messageSection.appendChild(messageSectionInputContainer);

		// button section

		let sendFormButtonContainer = document.createElement('p');
		sendFormButtonContainer.classList.add('w3-center');

		this.sendFormButton = document.createElement('p');
		this.sendFormButton.classList.add('w3-button', 'w3-section', 'w3-blue', 'w3-ripple');
		this.sendFormButton.textContent = "Send";

		sendFormButtonContainer.appendChild(this.sendFormButton); 

		form.appendChild(firstNameSection);
		form.appendChild(lastNameSection);
		form.appendChild(emailSection);
		form.appendChild(phoneSection);
		form.appendChild(messageSection);
		form.appendChild(sendFormButtonContainer);

		modalContainer.appendChild(form);

		modalContainer.appendChild(this.closeModalBtn);

		modalContent.appendChild(modalContainer);

		this.modal.appendChild(modalContent);
	}

	onCloseModalDialogBtnClick(event)
	{
		this.modal.style.display = 'none';
	}

	onSendFormButtonClick(event)
	{
		window.alert('Su consulta fue recibida. A la brevedad lo contactaremos. Gracias');
	}


	connectedCallback()
	{
		//Se va a ejecutar siempre cuando el elemento es insertado en el DOM
		//DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

		this.appendChild(this.modal);

		this.closeModalBtn.onclick = this.onCloseModalDialogBtnClick.bind(this);
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