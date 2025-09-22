class WCFetchAPI extends EventTarget
  {
    constructor()
    {
      super();
    }

    async getUser(userId)
    {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      let response_json = await response.json();

      return response_json;
    }

    async getUsers()
    {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
      let response_json = await response.json();

      return response_json;
    }

    async populateTable()
    {
      let data = await this.getUsers();

      this.dispatchEvent(new CustomEvent('populateTable', { detail: { data: data } }));
    }

    connectedCallback()
    {

    }
    
    disconnectedCallback()
    {
      this.populateTableBtn.onclick = null;
    }

  }

customElements.define('x-fetchapi', WCFetchAPI );

export { WCFetchAPI }