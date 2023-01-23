describe('Has correct content', () => {
    before(() => {
        cy.visit('/')
    })

    it('Displays the correct title', () => {
        cy.get('.hero > .hero-body > .title')
            .contains('Astro');
    })

    it('Displays the correct subtitle', () => {
        cy.get('.hero > .hero-body > .subtitle')
            .contains('Production ready, modern and high performance website template built with Astro.js and Bulma.io')
    })
})

describe('Buttons work as expected', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests primary button', () => {
        cy.get('.hero > .hero-body > .buttons > .is-secondary')
            .contains('Get Template').click()
        cy.url().should('include', '/#')

    })

    it('Tests secondary button', () => {
        cy.get('.hero > .hero-body > .buttons > .is-light')
            .contains('View code').click()
        cy.url().should('include', '/#')
    })
})

export { }
