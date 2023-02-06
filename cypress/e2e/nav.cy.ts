describe('Navbar links have correct name & URL', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests internal links', () => {
        cy.get('[data-test-id="navbar-end-home-link"]')
            .contains('Home').click()
            .url().should('include', '/')

        cy.visit('/')
        cy.get('[data-test-id="navbar-end-pricing-link"]')
            .contains('Pricing').click()
            .url().should('include', '/pricing')

        cy.visit('/')
        cy.get('[data-test-id="navbar-end-contact-link"]')
            .contains('Contact').click()
            .url().should('include', '/contact')

        cy.visit('/')
        cy.get('[data-test-id="navbar-end-about-link"]')
            .contains('About').click()
            .url().should('include', '/about')
    })

    it('Tests external links', () => {
        cy.get('[data-test-id="navbar-dropdown-license-link"]')
            .contains('License')
            .should('have.attr', 'href').and('eq', 'https://creativecommons.org/publicdomain/zero/1.0/')

        cy.get('[data-test-id="navbar-dropdown-project-link"]')
            .contains('Roadmap')
            .should('have.attr', 'href').and('eq', 'https://github.com/users/hammadmajid/projects/10')

        cy.get('[data-test-id="navbar-dropdown-sponsor-link"]')
            .contains('Sponsor')
            .should('have.attr', 'href').and('eq', 'https://patreon.com/hammadmajid')

        cy.get('[data-test-id="navbar-dropdown-prototype-link"]')
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

        it('Displays navbar links on desktop', () => {
            cy.get('[data-test-id="navbar-end"]').should('be.visible')
        })
    })

    context('Mobile', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(400, 800)
        })

        it('Hides nav links on mobile', () => {
            cy.get('[data-test-id="navbar-end"]').should('not.be.visible')
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
            cy.get('[data-test-id="navbar-dropdown"]').invoke('show')
            cy.get('[data-test-id="navbar-dropdown"]').should('be.visible')
        })
    })

    context('Mobile', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(400, 800)
        })

        it('All menu opens on click', () => {
            cy.get('[data-test-id="navbar-burger"]').click()
            cy.get('[data-test-id="navbar-end"]').should('be.visible')
            cy.get('[data-test-id="navbar-dropdown"]').should('be.visible')
        })
    })
})

export { } // See TS1028
