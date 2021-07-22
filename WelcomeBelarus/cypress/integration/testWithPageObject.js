import { navigateTo } from "../support/page_Objects/navigationPage"

describe('Test with Page Object', () => {
    beforeEach('Open aplication', () => {
        cy.visit('https://welcombelarus.com/')

    })
    it('all links', () => {
        navigateTo.aboutPage()
        navigateTo.aboutPage()
        navigateTo.galeryPage()
        navigateTo.suverirsPage()
        navigateTo.contactsPage()
    })

})