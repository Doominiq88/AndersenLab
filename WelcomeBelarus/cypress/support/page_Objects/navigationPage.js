export class NavigationPage {

    aboutPage() {
        cy.contains('О проекте').click({ force: true })
    }
    blogPage() {
        cy.contains('Блог').click({ force: true })
    }
    blogPage() {
        cy.contains('Блог').click({ force: true })
    }
    galeryPage() {
        cy.contains('Галерея').click({ force: true })
    }
    suverirsPage() {
        cy.contains('Сувениры').click({ force: true })
    }
    contactsPage() {
        cy.contains('Контакты').click({ force: true })
    }

}

export const navigateTo = new NavigationPage()