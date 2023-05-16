describe('Practice of Check box and radio buttons', () => {
    it('practice test cases', () => {
        https://rahulshettyacademy.com/seleniumPractise/#/

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])
        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck(['option1'])
        cy.wait(2000)
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')


        //Static Dropdown
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text() === "India") {
                $e1.click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.wait(2000)
        cy.get('#hide-textbox').click()
        cy.wait(2000)
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000)
        cy.get('#show-textbox').click()
        cy.wait(2000)
        cy.get('#displayed-text').should('be.visible')

        cy.wait(2000)
        cy.get('[value ="radio3"]').check().should('be.checked')




    })
})