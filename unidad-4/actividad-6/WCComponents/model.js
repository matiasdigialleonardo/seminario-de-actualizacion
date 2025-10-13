class Model
{
	constructor()
	{
		this.myDataExample = [0,1,2,3,4,5];
	}

	getData()
	{
		return this.myDataExample;
	}

    async getUsersData()
    {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/');
        let response_json = await response.json();

        return response_json;
    }

    async getUserData(userId)
    {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      let response_json = await response.json();

      return response_json;
    }
}

export { Model };