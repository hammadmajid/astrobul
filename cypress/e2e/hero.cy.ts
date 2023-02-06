describe('Hero have correct content', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Displays the correct title', () => {
        cy.get('[data-test-id="hero-title"]')
            .contains('Astro');
    })

    it('Displays the correct subtitle', () => {
        cy.get('[data-test-id="hero-subtitle"]')
            .contains('Production ready, modern and high performance website template built with Astro.js and Bulma.io')
    })
})

describe('Hero buttons work as expected', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests primary button', () => {
        cy.get('[data-test-id="hero-primary-btn"]')
            .contains('Get Template')
            .should('have.attr', 'href').and('eq', 'https://store.hammadmajid.com/')
    })

    it('Tests secondary button', () => {
        cy.get('[data-test-id="hero-secondary-btn"]')
            .contains('View code')
            .should('have.attr', 'href').and('eq', 'https://github.com/hammadmajid/astrobul')
    })
})

export { } // See TS1028
