///<reference types="cypress" />

describe('Click on the Search button', () => {
    it('first test', () => {
        cy.visit('https://www.bbc.com/')
        cy.get('input[placeholder="Search"]').type('football')
        cy.get('#orb-search-button').click()

    })

    it.only('Click on the first navigation link', () => {
        cy.visit('https://www.bbc.com/')
        cy.contains('News').click()

    })

})