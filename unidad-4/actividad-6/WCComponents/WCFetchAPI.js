class WCFetchAPI extends HTMLElement
  {
    constructor()
    {
      super();
      
      let response = await fetch('https://jsonplaceholder.typicode.com/users/');
      let response_json = await response.json();

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
      this.populateTableBtn.onclick = this.onPopulateTableButtonClick.bind(this);
      this.clearBtn.onclick = this.onClearButtonClick.bind(this);

      let rows = this.getRows();
    }
    
    disconnectedCallback()
    {
      this.populateTableBtn.onclick = null;
    }

  }

customElements.define('x-fetchapi', WCFetchAPI );

export { WCFetchAPI }