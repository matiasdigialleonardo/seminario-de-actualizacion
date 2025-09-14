import { WCFetchAPI } from './WCComponents/WCFetchAPI.js';

function main()
{
  let test = new WCFetchAPI();
  document.body.appendChild(test);
}

window.onload = main;