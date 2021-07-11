 /// <reference types="cypress" />

 describe('First test', () => {
     it('Click on the Search button', () => {
         cy.visit('https://www.bbc.com/')
         cy.get('#orb-search-q')
             .type('football')
             .should('be.visible')
             .should('be.enabled')
         cy.get('#orb-search-button').click()
     })

     it('Click on the first navigation link', () => {
         cy.visit('https://www.bbc.com/')
         cy.contains('News').click()
     })
 })