import { Model } from './WCComponents/model.js';
import { View } from './WCComponents/view.js'

function main()
{
    let model = new Model();
    let view = new View(model);

    //Recien se muestra en pantalla, cuando se añade el webcomponent en el arbol del DOM
    document.body.appendChild(view);
}

window.onload = main;