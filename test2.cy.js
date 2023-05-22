describe('Cypress learning', () => {
    it('Cypress learning and first test case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const vegname = $e1.find('h4.product-name').text()
            if (vegname.includes('Cashews')) {
                cy.wrap($e1).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.wait(3000)
        cy.get('.cart-preview > .action-block > button').click()
        // cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(3000)
        // cy.get(':nth-child(14)').click()
        cy.contains('Place Order').click()
        cy.wait(2000)

        // Static Dropdown
        // cy.get('select').select('India')
        cy.get('select').select('India').should('have.value', 'India')
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('button').click()

        //Dynamic Dropdown
	// First comment




    })
})
