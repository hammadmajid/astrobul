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
            .should('have.attr', 'href').and('include', '/')

        cy.get('#contact-link')
            .contains('Contact')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#about-link')
            .contains('About')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#more-link')
            .contains('More')

        cy.get('#license-link')
            .contains('License')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#issues-link')
            .contains('Issues')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#pr-link')
            .contains('Pull requests')
            .should('have.attr', 'href').and('include', '/')

        cy.get('#github-link')
            .contains('GitHub')
            .should('have.attr', 'href').and('include', '/')
    })
})

export { }