class WCFetchAPI extends HTMLElement
  {
    constructor()
    {
      super();
      
      this.populateTableBtn = document.createElement('button');
      this.clearBtn = document.createElement('button');

      this.populateTableBtn.innerText = 'Popular tabla';
      this.clearBtn.innerText = 'Limpiar';
      
      this.postsTable = document.createElement('table');

      // table headers

      let postsTableHead = this.postsTable.createTHead();
      let tableHeaderRow = postsTableHead.insertRow();

      let tableHeaderUserId = document.createElement('th');
      tableHeaderUserId.textContent = "userId";
      tableHeaderRow.appendChild(tableHeaderUserId);

      let tableHeaderId = document.createElement('th');
      tableHeaderId.textContent = "Id";
      tableHeaderRow.appendChild(tableHeaderId);

      let tableHeaderTitle = document.createElement('th');
      tableHeaderTitle.textContent = "Title";
      tableHeaderRow.appendChild(tableHeaderTitle);

      let tableHeaderBody = document.createElement('th');
      tableHeaderBody.textContent = "Body";
      tableHeaderRow.appendChild(tableHeaderBody);

      // table body

      this.postsTablebody = this.postsTable.createTBody();

      this.appendChild(this.populateTableBtn);
      this.appendChild(this.clearBtn);
      this.appendChild(this.postsTable);
    }
    
    getTableLength()
    {
      return this.postsTable.rows.length;
    }

    async onPopulateTableButtonClick(event)
    {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let response_json = await response.json();
      
      for (let rowData of response_json)
      {
        let row = this.postsTablebody.insertRow();

        let userIdCell = row.insertCell();
        userIdCell.textContent = rowData.userId;

        let IdCell = row.insertCell();
        IdCell.textContent = rowData.Id;

        let titleCell = row.insertCell();
        titleCell.textContent = rowData.title;

        let bodyCell = row.insertCell();
        bodyCell.textContent = rowData.body;
        
      }
    }

    onClearButtonClick(event)
    {
      let tableRows = this.getTableLength();

      for (let i = 1; i < tableRows; i++) {
          this.postsTablebody.deleteRow(0);
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