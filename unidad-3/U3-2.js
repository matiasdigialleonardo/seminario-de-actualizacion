class CustomLoginView extends HTMLElement
{
    constructor()
    {
        super();

        this.loginHeader = document.createElement('header');
        this.loginTitle = document.createElement('h1');

        this.loginFormContainer = document.createElement('div');
        this.loginForm = document.createElement('form');

        this.nameParagraph = document.createElement('p');
        this.nameInput = document.createElement('input');
        this.nameLabel = document.createElement('label');

        this.passwordParagraph = document.createElement('p');
        this.passwordInput = document.createElement('input');
        this.passwordLabel = document.createElement('label');

        this.genderMaleParagraph = document.createElement('p');
        this.genderMaleInput = document.createElement('input');
        this.genderMaleLabel = document.createElement('label');
        this.genderMaleInput.setAttribute('type', 'radio');

        this.genderFemaleParagraph = document.createElement('p');
        this.genderFemaleInput = document.createElement('input');
        this.genderFemaleLabel = document.createElement('label');
        this.genderFemaleInput.setAttribute('type', 'radio');

        this.genderDisabledParagraph = document.createElement('p');
        this.genderDisabledInput = document.createElement('input');
        this.genderDisabledLabel = document.createElement('label');
        this.genderDisabledInput.setAttribute('type', 'radio');
        this.genderDisabledInput.disabled = true;

        this.stayLoggedInParagraph = document.createElement('p');
        this.stayLoggedInInput = document.createElement('input');
        this.stayLoggedInLabel = document.createElement('label');
        this.stayLoggedInInput.setAttribute('type', 'checkbox');
        this.stayLoggedInInput.setAttribute('checked', 'checked');

        this.loginBtndParagraph = document.createElement('p');
        this.loginBtn = document.createElement('button');

        this.loginTitle.innerText = 'Login Example';

        this.nameLabel.innerText = 'Name';
        this.passwordLabel.innerText = 'Password';
        this.genderMaleLabel.innerText = 'Male';
        this.genderFemaleLabel.innerText = 'Female';
        this.genderDisabledLabel.innerText = 'Dont know (Disabled)';
        this.stayLoggedInLabel.innerText = 'Stay logged in';
        this.loginBtn.innerText = 'Log in';


        this.loginHeader.appendChild(this.loginTitle);

        this.nameParagraph.appendChild(this.nameLabel);
        this.nameParagraph.appendChild(this.nameInput);

        this.passwordParagraph.appendChild(this.passwordLabel);
        this.passwordParagraph.appendChild(this.passwordInput);
        
        this.genderMaleParagraph.appendChild(this.genderMaleInput);
        this.genderMaleParagraph.appendChild(this.genderMaleLabel);        

        this.genderFemaleParagraph.appendChild(this.genderFemaleInput);
        this.genderFemaleParagraph.appendChild(this.genderFemaleLabel);

        this.genderDisabledParagraph.appendChild(this.genderDisabledInput);
        this.genderDisabledParagraph.appendChild(this.genderDisabledLabel);

        this.stayLoggedInParagraph.appendChild(this.stayLoggedInLabel);
        this.stayLoggedInParagraph.appendChild(this.stayLoggedInInput);
        
        this.loginBtndParagraph.appendChild(this.loginBtn);

        this.loginTitle.classList.add('w3-container', 'w3-teal')

        this.nameInput.classList.add('w3-input');
        this.passwordInput.classList.add('w3-input');

        this.nameInput.style.width = '90%';
        this.passwordInput.style.width = '90%';


        this.genderMaleInput.classList.add('w3-radio');
        this.genderFemaleInput.classList.add('w3-radio');
        this.genderDisabledInput.classList.add('w3-radio');

        this.stayLoggedInInput.classList.add('w3-check');

        this.loginBtn.classList.add('w3-button', 'w3-section', 'w3-teal', 'w3-ripple');

        this.loginForm.classList.add('w3-container', 'w3-card-4');

        this.loginFormContainer.classList.add('w3-container', 'w3-half', 'w3-margin-top');

        this.loginForm.appendChild(this.nameParagraph);
        this.loginForm.appendChild(this.passwordParagraph);
        this.loginForm.appendChild(this.genderMaleParagraph);
        this.loginForm.appendChild(this.genderFemaleParagraph);
        this.loginForm.appendChild(this.genderDisabledParagraph);
        this.loginForm.appendChild(this.stayLoggedInParagraph);
        this.loginForm.appendChild(this.loginBtn);

        this.loginFormContainer.appendChild(this.loginForm);

    }

    connectedCallback()
    {
        //Se va a ejecutar siempre cuando el elemento es insertado en el DOM
        //DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

        this.appendChild(this.loginHeader);
        this.appendChild(this.loginFormContainer);
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

customElements.define('x-loginview', CustomLoginView );

export { CustomLoginView }