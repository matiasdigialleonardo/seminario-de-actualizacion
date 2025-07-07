class ResponsivePricingTable extends HTMLElement
{
    constructor()
    {
        super();

        this.titleContainer = document.createElement('div');
        let titleText = document.createElement('h2');

        this.titleContainer.classList.add('w3-container');

        titleText.textContent = "Responsive Pricing Tables";

        this.titleContainer.appendChild(titleText);

        this.tablesContainer = document.createElement('div');

        this.tablesContainer.classList.add('w3-row-padding');

        // Basic plan elements

        let basicPlanContainer = document.createElement('div');
        let basicPlanListContainer = document.createElement('ul');
        let basicPlanListTitle = document.createElement('li');
        let basicPlanStorage = document.createElement('li');
        let basicPlanEmails = document.createElement('li');
        let basicPlanDomains = document.createElement('li');
        let basicPlanSupport = document.createElement('li');

        let basicPlanPriceContainer = document.createElement('li');
        let basicPlanPriceDescription = document.createElement('span');

        this.basicPlanStorageSpace = document.createElement('b');
        let basicPlanStorageSpaceText = document.createTextNode(' Storage');
        this.basicPlanEmailsQuantity = document.createElement('b');
        let basicPlanEmailsQuantityText = document.createTextNode(' Emails');
        this.basicPlanDomainsQuantity = document.createElement('b');
        let basicPlanDomainsText = document.createTextNode(' Domains');
        this.basicPlanSupportPeriod = document.createElement('b');
        let basicPlanSupportPeriodText = document.createTextNode(' Support');
        this.basicPlanPrice = document.createElement('h2');

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
        basicPlanListTitle.classList.add('w3-wide');
        basicPlanPriceDescription.classList.add('w3-opacity');

        basicPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        basicPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        basicPlanListTitle.textContent = "Basic";

        basicPlanPriceDescription.textContent = "per month";

        basicPlanSignUpBtn.textContent = "Sign Up";

        basicPlanStorage.appendChild(this.basicPlanStorageSpace);
        basicPlanStorage.appendChild(basicPlanStorageSpaceText);
        basicPlanEmails.appendChild(this.basicPlanEmailsQuantity);
        basicPlanEmails.appendChild(basicPlanEmailsQuantityText);
        basicPlanDomains.appendChild(this.basicPlanDomainsQuantity);
        basicPlanDomains.appendChild(basicPlanDomainsText);
        basicPlanSupport.appendChild(this.basicPlanSupportPeriod);
        basicPlanSupport.appendChild(basicPlanSupportPeriodText);

        basicPlanListContainer.appendChild(basicPlanListTitle);
        basicPlanListContainer.appendChild(basicPlanStorage);
        basicPlanListContainer.appendChild(basicPlanEmails);
        basicPlanListContainer.appendChild(basicPlanDomains);
        basicPlanListContainer.appendChild(basicPlanSupport);


        basicPlanPriceContainer.appendChild(this.basicPlanPrice);
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
        let proPlanPriceDescription = document.createElement('span');

        this.proPlanStorageSpace = document.createElement('b');
        let proPlanStorageSpaceText = document.createTextNode(' Storage');
        this.proPlanEmailsQuantity = document.createElement('b');
        let proPlanEmailsQuantityText = document.createTextNode(' Emails');
        this.proPlanDomainsQuantity = document.createElement('b');
        let proPlanDomainsText = document.createTextNode(' Domains');
        this.proPlanSupportPeriod = document.createElement('b');
        let proPlanSupportPeriodText = document.createTextNode(' Support');
        this.proPlanPrice = document.createElement('h2');

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
        proPlanListTitle.classList.add('w3-wide');
        proPlanPriceDescription.classList.add('w3-opacity');

        proPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        proPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        proPlanListTitle.textContent = "Pro";

        proPlanPriceDescription.textContent = "per month";

        proPlanSignUpBtn.textContent = "Sign Up";

        proPlanStorage.appendChild(this.proPlanStorageSpace);
        proPlanStorage.appendChild(proPlanStorageSpaceText);
        proPlanEmails.appendChild(this.proPlanEmailsQuantity);
        proPlanEmails.appendChild(proPlanEmailsQuantityText);
        proPlanDomains.appendChild(this.proPlanDomainsQuantity);
        proPlanDomains.appendChild(proPlanDomainsText);
        proPlanSupport.appendChild(this.proPlanSupportPeriod);
        proPlanSupport.appendChild(proPlanSupportPeriodText);

        proPlanListContainer.appendChild(proPlanListTitle);
        proPlanListContainer.appendChild(proPlanStorage);
        proPlanListContainer.appendChild(proPlanEmails);
        proPlanListContainer.appendChild(proPlanDomains);
        proPlanListContainer.appendChild(proPlanSupport);


        proPlanPriceContainer.appendChild(this.proPlanPrice);
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
        let premiumPlanPriceDescription = document.createElement('span');

        this.premiumPlanStorageSpace = document.createElement('b');
        let premiumPlanStorageSpaceText = document.createTextNode(' Storage');
        this.premiumPlanEmailsQuantity = document.createElement('b');
        let premiumPlanEmailsQuantityText = document.createTextNode(' Emails');
        this.premiumPlanDomainsQuantity = document.createElement('b');
        let premiumPlanDomainsText = document.createTextNode(' Domains');
        this.premiumPlanSupportPeriod = document.createElement('b');
        let premiumPlanSupportPeriodText = document.createTextNode(' Support');
        this.premiumPlanPrice = document.createElement('h2');

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
        premiumPlanListTitle.classList.add('w3-wide');
        premiumPlanPriceDescription.classList.add('w3-opacity');

        premiumPlanSingUpContainer.classList.add('w3-light-grey', 'w3-padding-24');
        premiumPlanSignUpBtn.classList.add('w3-button', 'w3-green', 'w3-padding-large');

        premiumPlanListTitle.textContent = "premium";

        premiumPlanPriceDescription.textContent = "per month";

        premiumPlanSignUpBtn.textContent = "Sign Up";

        premiumPlanStorage.appendChild(this.premiumPlanStorageSpace);
        premiumPlanStorage.appendChild(premiumPlanStorageSpaceText);
        premiumPlanEmails.appendChild(this.premiumPlanEmailsQuantity);
        premiumPlanEmails.appendChild(premiumPlanEmailsQuantityText);
        premiumPlanDomains.appendChild(this.premiumPlanDomainsQuantity);
        premiumPlanDomains.appendChild(premiumPlanDomainsText);
        premiumPlanSupport.appendChild(this.premiumPlanSupportPeriod);
        premiumPlanSupport.appendChild(premiumPlanSupportPeriodText);

        premiumPlanListContainer.appendChild(premiumPlanListTitle);
        premiumPlanListContainer.appendChild(premiumPlanStorage);
        premiumPlanListContainer.appendChild(premiumPlanEmails);
        premiumPlanListContainer.appendChild(premiumPlanDomains);
        premiumPlanListContainer.appendChild(premiumPlanSupport);


        premiumPlanPriceContainer.appendChild(this.premiumPlanPrice);
        premiumPlanPriceContainer.appendChild(premiumPlanPriceDescription);

        premiumPlanListContainer.appendChild(premiumPlanPriceContainer)

        premiumPlanSingUpContainer.appendChild(premiumPlanSignUpBtn);

        premiumPlanListContainer.appendChild(premiumPlanSingUpContainer)

        premiumPlanContainer.appendChild(premiumPlanListContainer);


        this.tablesContainer.appendChild(basicPlanContainer);
        this.tablesContainer.appendChild(proPlanContainer);
        this.tablesContainer.appendChild(premiumPlanContainer);

    }

    // Basic plan setters

    setBasicPlanStorageSpace(storageSpace)
    {
        this.basicPlanStorageSpace.textContent = storageSpace;
    }

    setBasicPlanEmailsQuantity(emailsQuantity)
    {
        this.basicPlanEmailsQuantity.textContent = emailsQuantity;
    }

    setBasicPlanDomainsQuantity(domainsQuantity)
    {
        this.basicPlanDomainsQuantity.textContent = domainsQuantity;
    }

    setBasicPlanSupportPeriod(supportPeriod)
    {
        this.basicPlanSupportPeriod.textContent = supportPeriod;
    }

    setBasicPlanPrice(price)
    {
        this.basicPlanPrice.textContent = price;
    }

    // Pro plan setters

    setProPlanStorageSpace(storageSpace)
    {
        this.proPlanStorageSpace.textContent = storageSpace;
    }

    setProPlanEmailsQuantity(emailsQuantity)
    {
        this.proPlanEmailsQuantity.textContent = emailsQuantity;
    }

    setProPlanDomainsQuantity(domainsQuantity)
    {
        this.proPlanDomainsQuantity.textContent = domainsQuantity;
    }

    setProPlanSupportPeriod(supportPeriod)
    {
        this.proPlanSupportPeriod.textContent = supportPeriod;
    }

    setProPlanPrice(price)
    {
        this.proPlanPrice.textContent = price;
    }

    // premium plan setters

    setPremiumPlanStorageSpace(storageSpace)
    {
        this.premiumPlanStorageSpace.textContent = storageSpace;
    }

    setPremiumPlanEmailsQuantity(emailsQuantity)
    {
        this.premiumPlanEmailsQuantity.textContent = emailsQuantity;
    }

    setPremiumPlanDomainsQuantity(domainsQuantity)
    {
        this.premiumPlanDomainsQuantity.textContent = domainsQuantity;
    }

    setPremiumPlanSupportPeriod(supportPeriod)
    {
        this.premiumPlanSupportPeriod.textContent = supportPeriod;
    }

    setPremiumPlanPrice(price)
    {
        this.premiumPlanPrice.textContent = price;
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