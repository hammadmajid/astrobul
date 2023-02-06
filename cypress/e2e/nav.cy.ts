describe('Navbar links have correct name & URL', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests internal links', () => {
        cy.get('#home-link')
            .contains('Home').click()
            .url().should('include', '/')

        cy.visit('/')
        cy.get('#pricing-link')
            .contains('Pricing').click()
            .url().should('include', '/pricing')

        cy.visit('/')
        cy.get('#contact-link')
            .contains('Contact').click()
            .url().should('include', '/contact')

        cy.visit('/')
        cy.get('#about-link')
            .contains('About').click()
            .url().should('include', '/about')
    })

    it('Tests external links', () => {
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

describe('Navbar displays correctly on different screen sizes', () => {
    context('Desktop', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.viewport(1280, 1000)
        })

        it('Displays nav links on desktop', () => {
            cy.get('.navbar-end').should('be.visible')
        })
    })

    context('Mobile', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(400, 800)
        })

        it('Hides nav links on mobile', () => {
            cy.get('.navbar-end').should('not.be.visible')
        })
    })
})

describe('Navbar works as expected', () => {
    context('Desktop', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(1280, 1000)
        })

        it('Dropdown menu displays on hover', () => {
            cy.get('.navbar-dropdown').invoke('show')
            cy.get('.navbar-dropdown').should('be.visible')
        })
    })

    context('Mobile', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(400, 800)
        })

        it('All menu opens on click', () => {
            cy.get(".navbar-burger").click()
            cy.get('.navbar-end').should('be.visible')
            cy.get('.navbar-dropdown').should('be.visible')
        })
    })
})

export { } // See TS1028
