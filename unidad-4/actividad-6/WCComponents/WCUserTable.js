class WCUserTable extends HTMLElement
  {
    constructor()
    {
      super();
      
      this.populateTableBtn = document.createElement('button');
      this.clearBtn = document.createElement('button');

      this.populateTableBtn.innerText = 'Popular tabla';
      this.clearBtn.innerText = 'Limpiar';
      
      this.table = document.createElement('table');
      this.table.classList.add('w3-table-all', 'w3-card-4', 'w3-hoverable');

      // table headers

      let tableHead = this.table.createTHead();

      let tableHeaderRow = tableHead.insertRow();
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

      this.tablebody = this.table.createTBody();

      this.appendChild(this.populateTableBtn);
      this.appendChild(this.clearBtn);
      this.appendChild(this.table);
    }
    
    getTableLength()
    {
      return this.table.rows.length;
    }

    getTableRows()
    {
      return this.table.rows;
    }


    // Should the table have a method to populate itself?
    populateTable(data)
    {
      
      for (let rowData of data)
      {
        let row = this.tablebody.insertRow();

        // row.onclick = this.onRowClick.bind(this);

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

    clearTable(event)
    {
      let tableRows = this.getTableLength();

      for (let i = 1; i < tableRows; i++)
      {
          this.tablebody.deleteRow(0);
      }

    }

    connectedCallback() {};
    
    disconnectedCallback()
    {
      this.populateTableBtn.onclick = null;
    }

  }

customElements.define('x-wcusertable', WCUserTable );

export { WCUserTable }