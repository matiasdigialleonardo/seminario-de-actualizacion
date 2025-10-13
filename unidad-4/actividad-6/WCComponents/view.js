import { WCModalWindow } from './WCModalWindow.js';
import { Controller } from './controller.js';

class View extends HTMLElement
{
  constructor( modelInstance )
  {

    super();

    this.innerController = new Controller(this, modelInstance );

    this.populateTableBtn = document.createElement('button');
    this.clearBtn = document.createElement('button');

    this.populateTableBtn.innerText = 'Popular tabla';
    this.clearBtn.innerText = 'Limpiar';
    
    this.userTable = document.createElement('table');
    this.userTable.classList.add('w3-table-all', 'w3-card-4', 'w3-hoverable');
    this.modalWindow = new WCModalWindow();

    // table headers

    let userTableHead = this.userTable.createTHead();

    let tableHeaderRow = userTableHead.insertRow();
    tableHeaderRow.classList.add('w3-blue');

    let tableHeaderId = document.createElement('th');
    tableHeaderId.textContent = "ID";
    tableHeaderRow.appendChild(tableHeaderId);

    let tableHeaderName = document.createElement('th');
    tableHeaderName.textContent = "Nombre";
    tableHeaderRow.appendChild(tableHeaderName);

    let tableHeaderUsername = document.createElement('th');
    tableHeaderUsername.textContent = "Correo";
    tableHeaderRow.appendChild(tableHeaderUsername);

    let tableHeaderEmail = document.createElement('th');
    tableHeaderEmail.textContent = "Correo";
    tableHeaderRow.appendChild(tableHeaderEmail);

    let tableHeaderWebsite = document.createElement('th');
    tableHeaderWebsite.textContent = "Web";
    tableHeaderRow.appendChild(tableHeaderWebsite);

    let tableHeaderPhone = document.createElement('th');
    tableHeaderPhone.textContent = "Celular";
    tableHeaderRow.appendChild(tableHeaderPhone);

    // table body

    this.userTablebody = this.userTable.createTBody();

    // address table

    this.addressTable = document.createElement('table');
    this.addressTable.classList.add('w3-table-all', 'w3-card-4', 'w3-hoverable');

    let addressTableHead = this.addressTable.createTHead();
    let addressTableHeaderRow = addressTableHead.insertRow();
    addressTableHeaderRow.classList.add('w3-blue');

    let addressTableHeaderId = document.createElement('th');
    addressTableHeaderId.textContent = "ID";
    addressTableHeaderRow.appendChild(addressTableHeaderId);

    let addressTableHeaderName = document.createElement('th');
    addressTableHeaderName.textContent = "Nombre";
    addressTableHeaderRow.appendChild(addressTableHeaderName);

    let addressTableHeaderStreet = document.createElement('th');
    addressTableHeaderStreet.textContent = "Calle";
    addressTableHeaderRow.appendChild(addressTableHeaderStreet);

    let addressTableHeaderSuite = document.createElement('th');
    addressTableHeaderSuite.textContent = "Oficina";
    addressTableHeaderRow.appendChild(addressTableHeaderSuite);

    let addressTableHeaderCity = document.createElement('th');
    addressTableHeaderCity.textContent = "Ciudad";
    addressTableHeaderRow.appendChild(addressTableHeaderCity);

    let addressTableHeaderZipcode = document.createElement('th');
    addressTableHeaderZipcode.textContent = "Codigo postal";
    addressTableHeaderRow.appendChild(addressTableHeaderZipcode);

    let addressTableHeaderLatitude = document.createElement('th');
    addressTableHeaderLatitude.textContent = "Latitud";
    addressTableHeaderRow.appendChild(addressTableHeaderLatitude);

    let addressTableHeaderLongitude = document.createElement('th');
    addressTableHeaderLongitude.textContent = "Longitud";
    addressTableHeaderRow.appendChild(addressTableHeaderLongitude);

    let addressTableHeaderCompanyName = document.createElement('th');
    addressTableHeaderCompanyName.textContent = "Compañia";
    addressTableHeaderRow.appendChild(addressTableHeaderCompanyName);

    let addressTableHeaderCatchphrase = document.createElement('th');
    addressTableHeaderCatchphrase.textContent = "Eslogan";
    addressTableHeaderRow.appendChild(addressTableHeaderCatchphrase);

    let addressTableHeaderBuzzword = document.createElement('th');
    addressTableHeaderBuzzword.textContent = "Jerga";
    addressTableHeaderRow.appendChild(addressTableHeaderBuzzword);

    this.addressTableBody = this.addressTable.createTBody();

    this.appendChild(this.populateTableBtn);
    this.appendChild(this.clearBtn);
    this.appendChild(this.userTable);
  }
    
    getTableLength()
    {
      return this.userTable.rows.length;
    }

    getAddressTableLength()
    {
      return this.addressTable.rows.length;
    }

    getRows()
    {
      return this.userTable.rows;
    }

    clearAddressTable()
    {
      let tableRows = this.getAddressTableLength();

      for (let i = 1; i < tableRows; i++) {
          this.addressTableBody.deleteRow(0);
      }
    }

    async showUserRow(data)
    {
      this.clearAddressTable();

      let row = this.addressTableBody.insertRow();

      let idCell = row.insertCell();
      idCell.textContent = data.id;

      let nameCell = row.insertCell();
      nameCell.textContent = data.name;

      let streetCell = row.insertCell();
      streetCell.textContent = data.address.street;

      let suiteCell = row.insertCell();
      suiteCell.textContent = data.address.suite;

      let cityCell = row.insertCell();
      cityCell.textContent = data.address.city;

      let zipcodeCell = row.insertCell();
      zipcodeCell.textContent = data.address.zipcode;

      let latitudeCell = row.insertCell();
      latitudeCell.textContent = data.address.geo.lat;

      let longitudeCell = row.insertCell();
      longitudeCell.textContent = data.address.geo.lng;

      let companyNameCell = row.insertCell();
      companyNameCell.textContent = data.company.name;
      
      let catchPhraseCell = row.insertCell();
      catchPhraseCell.textContent = data.company.catchPhrase;

      let buzzwordsCell = row.insertCell();
      buzzwordsCell.textContent = data.company.bs;

      this.modalWindow.setContent(this.addressTable);

      this.modalWindow.show();

      this.appendChild(this.modalWindow); 
    }

    populateTable(data)
    {
      for (let rowData of data)
      {
        let row = this.userTablebody.insertRow();

        row.onclick = this.innerController.onRowClick.bind(this.innerController);

        let idCell = row.insertCell();
        idCell.textContent = rowData.id;

        let nameCell = row.insertCell();
        nameCell.textContent = rowData.name;

        let usernameCell = row.insertCell();
        usernameCell.textContent = rowData.username;
        
        let emailCell = row.insertCell();
        emailCell.textContent = rowData.email;
        emailCell.classList.add('w3-tag', 'w3-round', 'w3-lime');

        let websiteCell = row.insertCell();
        websiteCell.textContent = rowData.website;

        let phoneCell = row.insertCell();
        phoneCell.textContent = rowData.phone;

      }
    }

    onClearButtonClick(event)
    {
      let tableRows = this.getTableLength();

      for (let i = 1; i < tableRows; i++) {
          this.userTablebody.deleteRow(0);
      }
      
    }
    
    onClearButtonClick(event)
    {
      let tableRows = this.getTableLength();

      for (let i = 1; i < tableRows; i++) {
          this.userTablebody.deleteRow(0);
      }
      
    }

  connectedCallback()
  {
    this.populateTableBtn.onclick = this.innerController.onPopulateTableButtonClick.bind(this.innerController);

    this.clearBtn.onclick = this.onClearButtonClick.bind(this);

  }

  disconnectedCallback()
  {
    this.populateTableBtn.onclick = null;
  }

}

customElements.define('x-view', View );

export { View }