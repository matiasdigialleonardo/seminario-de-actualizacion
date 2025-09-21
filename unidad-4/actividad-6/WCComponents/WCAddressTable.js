class WCAddressTable extends HTMLElement
  {
    constructor()
    {
      super();

      this.table = document.createElement('table');
      this.table.classList.add('w3-table-all', 'w3-card-4', 'w3-hoverable');

      let tableHead = this.table.createTHead();
      let tableHeaderRow = tableHead.insertRow();
      tableHeaderRow.classList.add('w3-blue');

      let tableHeaderId = document.createElement('th');
      tableHeaderId.textContent = "ID";
      tableHeaderRow.appendChild(tableHeaderId);

      let tableHeaderName = document.createElement('th');
      tableHeaderName.textContent = "Nombre";
      tableHeaderRow.appendChild(tableHeaderName);

      let tableHeaderStreet = document.createElement('th');
      tableHeaderStreet.textContent = "Calle";
      tableHeaderRow.appendChild(tableHeaderStreet);

      let tableHeaderSuite = document.createElement('th');
      tableHeaderSuite.textContent = "Oficina";
      tableHeaderRow.appendChild(tableHeaderSuite);

      let tableHeaderCity = document.createElement('th');
      tableHeaderCity.textContent = "Ciudad";
      tableHeaderRow.appendChild(tableHeaderCity);

      let tableHeaderZipcode = document.createElement('th');
      tableHeaderZipcode.textContent = "Codigo postal";
      tableHeaderRow.appendChild(tableHeaderZipcode);

      let tableHeaderLatitude = document.createElement('th');
      tableHeaderLatitude.textContent = "Latitud";
      tableHeaderRow.appendChild(tableHeaderLatitude);

      let tableHeaderLongitude = document.createElement('th');
      tableHeaderLongitude.textContent = "Longitud";
      tableHeaderRow.appendChild(tableHeaderLongitude);

      let tableHeaderCompanyName = document.createElement('th');
      tableHeaderCompanyName.textContent = "Compañia";
      tableHeaderRow.appendChild(tableHeaderCompanyName);

      let tableHeaderCatchphrase = document.createElement('th');
      tableHeaderCatchphrase.textContent = "Eslogan";
      tableHeaderRow.appendChild(tableHeaderCatchphrase);

      let tableHeaderBuzzword = document.createElement('th');
      tableHeaderBuzzword.textContent = "Jerga";
      tableHeaderRow.appendChild(tableHeaderBuzzword);

      this.tableBody = this.table.createTBody();

      this.appendChild(this.table);
    }
    
    getTableLength()
    {
      return this.table.rows.length;
    }

    getTableRows()
    {
      return this.userTable.rows;
    }

    populateTable(data)
    {
      this.cleartable();

      let currentRow = event.currentTarget;
      let userId = currentRow.cells[0].textContent;

      for (let rowData of data)
      {
        let row = this.tableBody.insertRow();

        let idCell = row.insertCell();
        idCell.textContent = rowData.id;

        let nameCell = row.insertCell();
        nameCell.textContent = rowData.name;

        let streetCell = row.insertCell();
        streetCell.textContent = rowData.address.street;

        let suiteCell = row.insertCell();
        suiteCell.textContent = rowData.address.suite;

        let cityCell = row.insertCell();
        cityCell.textContent = rowData.address.city;

        let zipcodeCell = row.insertCell();
        zipcodeCell.textContent = rowData.address.zipcode;

        let latitudeCell = row.insertCell();
        latitudeCell.textContent = rowData.address.geo.lat;

        let longitudeCell = row.insertCell();
        longitudeCell.textContent = rowData.address.geo.lng;

        let companyNameCell = row.insertCell();
        companyNameCell.textContent = rowData.company.name;
        
        let catchPhraseCell = row.insertCell();
        catchPhraseCell.textContent = rowData.company.catchPhrase;

        let buzzwordsCell = row.insertCell();
        buzzwordsCell.textContent = rowData.company.bs;

      }
    }

    clearTable(event)
    {
      let tableRows = this.getTableLength();

      for (let i = 1; i < tableRows; i++)
      {
          this.userTablebody.deleteRow(0);
      }
      
    }
  
    connectedCallback()
    {

    }
    
    disconnectedCallback()
    {

    }

  }

customElements.define('x-wcaddresstable', WCAddressTable );

export { WCFetchAPI }