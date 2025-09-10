import { WCModalDialog } from "./WCModalDialog.js";

function main()
{
    let wcModalDialog = new WCModalDialog();

    document.body.append(wcModalDialog);
}

window.onload = main;