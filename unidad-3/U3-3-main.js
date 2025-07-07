import { ResponsivePricingTable } from "./U3-3.js";

function main()
{
    let responsivePricingTable = new ResponsivePricingTable();

    responsivePricingTable.setBasicPlanStorageSpace("10GB");
    responsivePricingTable.setBasicPlanEmailsQuantity("10");
    responsivePricingTable.setBasicPlanDomainsQuantity("10");
    responsivePricingTable.setBasicPlanSupportPeriod("Endless");
    responsivePricingTable.setBasicPlanPrice("$ 10");

    responsivePricingTable.setProPlanStorageSpace("25GB");
    responsivePricingTable.setProPlanEmailsQuantity("25");
    responsivePricingTable.setProPlanDomainsQuantity("25");
    responsivePricingTable.setProPlanSupportPeriod("Endless");
    responsivePricingTable.setProPlanPrice("$ 25");

    responsivePricingTable.setPremiumPlanStorageSpace("50GB");
    responsivePricingTable.setPremiumPlanEmailsQuantity("50");
    responsivePricingTable.setPremiumPlanDomainsQuantity("50");
    responsivePricingTable.setPremiumPlanSupportPeriod("Endless");
    responsivePricingTable.setPremiumPlanPrice("$ 50");


    document.body.append(responsivePricingTable);
}

window.onload = main;