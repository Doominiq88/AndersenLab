describe('Navigation checking', () => {
    it('Open main page', () => {
        cy.visit('https://welcombelarus.com/')

        cy.get('#top-recall').click()
        cy.get('#name').click()
        cy.get('#name').type('Valeri')

    })


})