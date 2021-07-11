describe('Navigation checking', () => {
    it('Open main page', () => {
        cy.visit('https://welcombelarus.com/')
    })

    it('Click on "About"', () => {
        cy.contains('О проекте').click({ force: true })
    })

    it('Click on "Glog" button', () => {
        cy.contains('Блог').click({ force: true })
    })

})