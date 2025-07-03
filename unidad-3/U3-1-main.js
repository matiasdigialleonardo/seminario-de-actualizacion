import { CustomCalculator } from "./U3-1.js";

function main()
{
    let calculator = new CustomCalculator();

    document.body.append(calculator);
}

window.onload = main;