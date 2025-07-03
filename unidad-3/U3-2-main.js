import { CustomLoginView } from "./U3-2.js";

function main()
{
    let loginView = new CustomLoginView();

    document.body.append(loginView);
}

window.onload = main;