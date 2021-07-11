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

    // it('about', () => {
    //     navigateTo.aboutPage()
    // })
    // it('blog', () => {
    //     navigateTo.aboutPage()
    // })
    // it('galery', () => {
    //     navigateTo.galeryPage()
    // })
    // it('suvenirs', () => {
    //     navigateTo.suverirsPage()
    // })
    // it('contacts', () => {
    //     navigateTo.contactsPage()
    // })
})