//This is first change:

describe('test suite of child window', () => {
    it('test case of child window', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function (e1) {
            const url = e1.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                // cy.get('div.sub-menu-bar a[href*="about"]').click()
                cy.get('.navbar-nav > :nth-child(4) > a').click()

            })
        })

    })
})
