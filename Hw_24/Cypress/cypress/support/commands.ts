/// <reference types="Cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add("opendrive2", () => {
    cy.visit("https://www.drive2.ru//")
})
Cypress.Commands.add("clicksearch", ()  => {
    cy.get("body > main > div.c-index-header.x-box.x-box--ghost > form > button").click()
})
Cypress.Commands.add("clicklogin", ()  => {
    cy.get('a[data-testid="topbar.login"]').click()

})
Cypress.Commands.add("forgetpass", ()  => {
    cy.get('#loginForm > div:nth-child(4) > div > a').click()

})
Cypress.Commands.add("vacancy", ()  => {
    cy.get('a[data-testid="footer-links.jobs"]').click()

})
Cypress.Commands.add("login", ()  => {
    cy.get('#loginForm > div.y-form-item.o-flex.o-narrow > div > div:nth-child(1) > button').click()

})



