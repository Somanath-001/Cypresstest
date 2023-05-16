// <reference types="Cypress" />
// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe('frame test suite', () => {
    it('test examples of frame work', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        // cy.iframe().find('h1[class*="pricing-title"]').should('be.visible')
        cy.wait(3000)

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
        // cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)


    })
})