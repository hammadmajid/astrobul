describe('Tests NavBar functionality', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Links have correct name and url', () => {
        cy.get('#home-link')
            .contains('Home')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#pricing-link')
            .contains('Pricing')
            .should('have.attr', 'href').and('include', '/pricing')

        cy.get('#contact-link')
            .contains('Contact')
            .should('have.attr', 'href').and('include', '/contact')

        cy.get('#about-link')
            .contains('About')
            .should('have.attr', 'href').and('include', '/about')

        cy.get('#more-link')
            .contains('More')

        cy.get('#license-link')
            .contains('License')
            .should('have.attr', 'href').and('eq', 'https://creativecommons.org/publicdomain/zero/1.0/')

        cy.get('#project-link')
            .contains('Roadmap')
            .should('have.attr', 'href').and('eq', 'https://github.com/users/hammadmajid/projects/10')

        cy.get('#sponsor-link')
            .contains('Sponsor')
            .should('have.attr', 'href').and('eq', 'https://patreon.com/hammadmajid')

        cy.get('#prototype-link')
            .contains('Prototype')
            .should('have.attr', 'href').and('eq', 'https://www.figma.com/community/file/1197507698947430863')
    })
})

export { }