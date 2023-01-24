describe('Has correct content', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Displays the correct title', () => {
        cy.get('#hero-title')
            .contains('Astro');
    })

    it('Displays the correct subtitle', () => {
        cy.get('#hero-subtitle')
            .contains('Production ready, modern and high performance website template built with Astro.js and Bulma.io')
    })
})

describe('Buttons work as expected', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests primary button', () => {
        cy.get('#hero-primary-btn')
            .contains('Get Template').click()
            cy.on('url:changed', (newUrl) => {
                expect(newUrl).to.equal("https://store.hammadmajid.com/")
            })
    })

    it('Tests secondary button', () => {
        cy.get('#hero-secondary-btn')
            .contains('View code').click()
            cy.on('url:changed', (newUrl) => {
                expect(newUrl).to.equal("https://github.com/hammadmajid/astrobul")
            })
    })
})

export { }
