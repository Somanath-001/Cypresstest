// let data1 = null;
beforeEach(() => {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});
