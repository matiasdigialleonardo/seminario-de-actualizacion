class WCFetchAPI extends HTMLElement
  {
    constructor()
    {
      super();
      
      this.populateTableBtn = document.createElement('button');
      this.clearBtn = document.createElement('button');

      this.populateTableBtn.innerText = 'Popular tabla';
      this.clearBtn.innerText = 'Limpiar';
      
      this.userTable = document.createElement('table');
      this.userTable.classList.add('w3-table-all', 'w3-card-4', 'w3-hoverable');

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

      this.appendChild(this.populateTableBtn);
      this.appendChild(this.clearBtn);
      this.appendChild(this.userTable);
    }
    
    getTableLength()
    {
      return this.userTable.rows.length;
    }

    async onPopulateTableButtonClick(event)
    {
      let response = await fetch('https://jsonplaceholder.typicode.com/users/');
      let response_json = await response.json();
      
      for (let rowData of response_json)
      {
        let row = this.userTablebody.insertRow();

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
    
    connectedCallback()
    {
      this.populateTableBtn.onclick = this.onPopulateTableButtonClick.bind(this);
      this.clearBtn.onclick = this.onClearButtonClick.bind(this);
    }
    
    disconnectedCallback()
    {
      this.populateTableBtn.onclick = null;
    }

  }

customElements.define('x-fetchapi', WCFetchAPI );

export { WCFetchAPI }