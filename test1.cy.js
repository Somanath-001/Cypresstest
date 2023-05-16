describe('Cypress learning', () => {
    it('Cypress learning and first test case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        // parent and child chaining

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, list) => {
            const vegname = $el.find('h4.product-name').text()
            if (vegname.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
            cy.get(':nth-child(4) > .product-action > button').click()
        })

    })
})