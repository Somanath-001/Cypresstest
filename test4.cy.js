describe('practice test suite', () => {
    it('practice test cases', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.visit("http://qaclickacademy.com/practice.php")
        cy.wait(2000)
        cy.get('#alertbtn').click()
        cy.wait(2000)
        cy.get('#confirmbtn').click()

        //cy.get('[value = "confirm"]').click()

        // POPup Massages
        	// Added one comment for git practice

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.wait(2000)
        // using invoke method
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // cy.url().should('include', 'qaclickacademy')
        // cy.url().should('eq', 'https://www.qaclickacademy.com/')
        cy.url().should('eq', 'https://www.qaclickacademy.com/')
        cy.wait(6000)

        // cy.url().and('contain', 'qaclickacademy')


        cy.go('back')


    })

})
