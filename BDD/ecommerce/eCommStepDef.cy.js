/// <reference types = "cypress"/>
import HomePage from "../../../../PageObjects/HomePage";
import ProductPage from "../../../../PageObjects/ProductPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage();
const productPage = new ProductPage();
let name;
Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

// When I add items to Cart
When("I add items to Cart", function () {
  homePage.getShopTab().click();

  this.data.productName.forEach(function (element) {
    cy.selectProduct(element);
  });
  productPage.getCheckOutbutton().click();
});

// And Validate the total prices
When("Validate the total prices", () => {
  var min = 0;
  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      const amount = $el.text();
      var result = amount.split(" ");
      result = result[1].trim();
      min = Number(min) + Number(result);
    })
    .then(function () {
      cy.log(min);
    });
  cy.get("h3 strong").then(function (element) {
    const amount = element.text();
    var result = amount.split(" ");
    var total = result[1].trim();
    expect(Number(total)).to.equal(min);
  });
});

// Then Select the country submit and verify Thankyou
Then("Select the country submit and verify Thankyou", () => {
  productPage.getCheckoutbutton().click();
  productPage.getcountryAddress().type("India");
  cy.wait(6000);
  productPage.getSelectCountry().click();
  productPage.getCheckbox().click();
  productPage.getpurchaseButton().click();
  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true;
  });
});
// Given I open Ecommerce Page

// When I fill the form details
When("I fill the form details", function (dataTable) {
  // homePage.getEditBox().type(this.data.name);
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(dataTable.rawTable[1][0]);

  // homePage.getgender().select(this.data.gender);
  homePage.getgender().select(dataTable.rawTable[1][1]);
});

// Then Validate the form behaviour
Then("Validate the form behaviour", function () {
  homePage.gettwoWayDatabinding().should("have.value", name);
  // homePage.gettwoWayDatabinding().should("have.value", this.data.name);

  homePage.getminlength().should("have.attr", "minlength", 2);

  homePage.getEntrepreneur().should("be.disabled");
});

// And Select the shop Page
Then("Select the shop Page", () => {
  homePage.getShopTab().click();
});
