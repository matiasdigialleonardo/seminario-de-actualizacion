class ResponsivePricingTable extends HTMLElement
{
    constructor()
    {
        super();

        // <div class="w3-container">
        //   <h2>Responsive Pricing Tables</h2>
        // </div>

        this.titleContainer = document.createElement('div');
        let titleText = document.createElement('h2');

        this.titleContainer.classList.add('w3-container');

        titleText.textContent = "Responsive Pricing Tables";

        this.titleContainer.appendChild(titleText);

        // <div class="w3-row-padding">

        this.tablesContainer = document.createElement('div');

        this.tablesContainer.classList.add('w3-row-padding');

        // <div class="w3-third w3-margin-bottom">
        //   <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        //     <li class="w3-black w3-xlarge w3-padding-32">Basic</li>
        //     <li class="w3-padding-16"><b>10GB</b> Storage</li>
        //     <li class="w3-padding-16"><b>10</b> Emails</li>
        //     <li class="w3-padding-16"><b>10</b> Domains</li>
        //     <li class="w3-padding-16"><b>Endless</b> Support</li>
        //     <li class="w3-padding-16">
        //       <h2 class="w3-wide">$ 10</h2>
        //       <span class="w3-opacity">per month</span>
        //     </li>
        //     <li class="w3-light-grey w3-padding-24">
        //       <button class="w3-button w3-green w3-padding-large">Sign Up</button>
        //     </li>
        //   </ul>
        // </div>

        // Basic plan elements

        let basicPlanContainer = document.createElement('div');
        let basicPlanListContainer = document.createElement('ul');
        let basicPlanListTitle = document.createElement('li');
        let basicPlanStorage = document.createElement('li');
        let basicPlanEmails = document.createElement('li');
        let basicPlanDomains = document.createElement('li');
        let basicPlanSupport = document.createElement('li');

        let basicPlanPriceContainer = document.createElement('li');
        let basicPlanPriceTitle = document.createElement('h2');
        let basicPlanPriceDescription = document.createElement('span');

        let basicPlanSingUpContainer = document.createElement('li');
        let basicPlanSignUpBtn = document.createElement('button');

        basicPlanContainer.classList.add('w3-third', 'w3-margin-bottom');
        basicPlanListContainer.classList.add('w3-ul', 'w3-border', 'w3-center', 'w3-hover-shadow');
        basicPlanListTitle.classList.add('w3-black', 'w3-xlarge', 'w3-padding-32');
        basicPlanStorage.classList.add('w3-padding-16');
        basicPlanEmails.classList.add('w3-padding-16');
        basicPlanDomains.classList.add('w3-padding-16');
        basicPlanSupport.classList.add('w3-padding-16');

        basicPlanPriceContainer.classList.add('w3-padding-16');
        basicPlanPriceTitle.classList.add('w3-wide');
        basicPlanPriceDescription.classList.add('w3-opacity');

        basicPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        basicPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        basicPlanSignUpBtn.textContent = "Sign Up";

        basicPlanListContainer.appendChild(basicPlanListTitle);
        basicPlanListContainer.appendChild(basicPlanStorage);
        basicPlanListContainer.appendChild(basicPlanEmails);
        basicPlanListContainer.appendChild(basicPlanDomains);
        basicPlanListContainer.appendChild(basicPlanSupport);

        basicPlanPriceContainer.appendChild(basicPlanPriceTitle);
        basicPlanPriceContainer.appendChild(basicPlanPriceDescription);

        basicPlanListContainer.appendChild(basicPlanPriceContainer)

        basicPlanSingUpContainer.appendChild(basicPlanSignUpBtn);

        basicPlanListContainer.appendChild(basicPlanSingUpContainer)

        basicPlanContainer.appendChild(basicPlanListContainer);


        // Pro plan elements

        let proPlanContainer = document.createElement('div');
        let proPlanListContainer = document.createElement('ul');
        let proPlanListTitle = document.createElement('li');
        let proPlanStorage = document.createElement('li');
        let proPlanEmails = document.createElement('li');
        let proPlanDomains = document.createElement('li');
        let proPlanSupport = document.createElement('li');

        let proPlanPriceContainer = document.createElement('li');
        let proPlanPriceTitle = document.createElement('h2');
        let proPlanPriceDescription = document.createElement('span');

        let proPlanSingUpContainer = document.createElement('li');
        let proPlanSignUpBtn = document.createElement('button');

        proPlanContainer.classList.add('w3-third', 'w3-margin-bottom');
        proPlanListContainer.classList.add('w3-ul', 'w3-border', 'w3-center', 'w3-hover-shadow');
        proPlanListTitle.classList.add('w3-black', 'w3-xlarge', 'w3-padding-32');
        proPlanStorage.classList.add('w3-padding-16');
        proPlanEmails.classList.add('w3-padding-16');
        proPlanDomains.classList.add('w3-padding-16');
        proPlanSupport.classList.add('w3-padding-16');

        proPlanPriceContainer.classList.add('w3-padding-16');
        proPlanPriceTitle.classList.add('w3-wide');
        proPlanPriceDescription.classList.add('w3-opacity');

        proPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        proPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        proPlanSignUpBtn.textContent = "Sign Up";

        proPlanListContainer.appendChild(proPlanListTitle);
        proPlanListContainer.appendChild(proPlanStorage);
        proPlanListContainer.appendChild(proPlanEmails);
        proPlanListContainer.appendChild(proPlanDomains);
        proPlanListContainer.appendChild(proPlanSupport);

        proPlanPriceContainer.appendChild(proPlanPriceTitle);
        proPlanPriceContainer.appendChild(proPlanPriceDescription);

        proPlanListContainer.appendChild(proPlanPriceContainer)

        proPlanSingUpContainer.appendChild(proPlanSignUpBtn);

        proPlanListContainer.appendChild(proPlanSingUpContainer)

        proPlanContainer.appendChild(proPlanListContainer);

        // Premium plan elements

        let premiumPlanContainer = document.createElement('div');
        let premiumPlanListContainer = document.createElement('ul');
        let premiumPlanListTitle = document.createElement('li');
        let premiumPlanStorage = document.createElement('li');
        let premiumPlanEmails = document.createElement('li');
        let premiumPlanDomains = document.createElement('li');
        let premiumPlanSupport = document.createElement('li');

        let premiumPlanPriceContainer = document.createElement('li');
        let premiumPlanPriceTitle = document.createElement('h2');
        let premiumPlanPriceDescription = document.createElement('span');

        let premiumPlanSingUpContainer = document.createElement('li');
        let premiumPlanSignUpBtn = document.createElement('button');        

        premiumPlanContainer.classList.add('w3-third', 'w3-margin-bottom');
        premiumPlanListContainer.classList.add('w3-ul', 'w3-border', 'w3-center', 'w3-hover-shadow');
        premiumPlanListTitle.classList.add('w3-black', 'w3-xlarge', 'w3-padding-32');
        premiumPlanStorage.classList.add('w3-padding-16');
        premiumPlanEmails.classList.add('w3-padding-16');
        premiumPlanDomains.classList.add('w3-padding-16');
        premiumPlanSupport.classList.add('w3-padding-16');

        premiumPlanPriceContainer.classList.add('w3-padding-16');
        premiumPlanPriceTitle.classList.add('w3-wide');
        premiumPlanPriceDescription.classList.add('w3-opacity');

        premiumPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        premiumPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        premiumPlanSignUpBtn.textContent = "Sign Up";

        premiumPlanListContainer.appendChild(premiumPlanListTitle);
        premiumPlanListContainer.appendChild(premiumPlanStorage);
        premiumPlanListContainer.appendChild(premiumPlanEmails);
        premiumPlanListContainer.appendChild(premiumPlanDomains);
        premiumPlanListContainer.appendChild(premiumPlanSupport);

        premiumPlanPriceContainer.appendChild(premiumPlanPriceTitle);
        premiumPlanPriceContainer.appendChild(premiumPlanPriceDescription);

        premiumPlanListContainer.appendChild(premiumPlanPriceContainer)

        premiumPlanSingUpContainer.appendChild(premiumPlanSignUpBtn);

        premiumPlanListContainer.appendChild(premiumPlanSingUpContainer)

        premiumPlanContainer.appendChild(premiumPlanListContainer);


        this.tablesContainer.appendChild(basicPlanContainer);
        this.tablesContainer.appendChild(proPlanContainer);
        this.tablesContainer.appendChild(premiumPlanContainer);

    }

    connectedCallback()
    {
        //Se va a ejecutar siempre cuando el elemento es insertado en el DOM
        //DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

        this.appendChild(this.tablesContainer);

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

customElements.define('x-pricingtable', ResponsivePricingTable );

export { ResponsivePricingTable }