// reference types = cypress//
import HomePage from "../../PageObjects/HomePage";
import ProductPage from "../../PageObjects/ProductPage";
describe("framework test suite", function () {
  // let data1 = null;
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("frame work test case ", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    cy.visit(Cypress.env("url") + "/angularpractice/");

    // cy.get(':nth-child(1) > .form-control').type("Somanath")
    cy.wait(2000);
    // cy.get('select').select("Female")

    homePage.getEditBox().type(this.data.name);
    cy.wait(2000);
    homePage.getgender().select(this.data.gender);
    cy.wait(2000);
    homePage.gettwoWayDatabinding().should("have.value", this.data.name);
    cy.wait(2000);
    homePage.getminlength().should("have.attr", "minlength", 2);
    cy.wait(2000);
    homePage.getEntrepreneur().should("be.disabled");
    cy.wait(2000);
    homePage.getShopTab().click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    productPage.getCheckOutbutton().click();
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
    // cy.get('input[type="heading"]').should('have.attr', productName)
    //cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.wait(3000);
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
});
