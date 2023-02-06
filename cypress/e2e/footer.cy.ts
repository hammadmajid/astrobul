describe('Footer links have correct name & URL', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Tests header links', () => {
        cy.get('[data-test-id="footer-header-logo"]')
            .contains('astrobul').click()
            .url().should('include', '/')

        cy.get('[data-test-id="footer-header-facebook-link"]')
            .should('have.attr', 'href').and('eq', 'https://facebook.com/me')

        cy.get('[data-test-id="footer-header-instagram-link"]')
            .should('have.attr', 'href').and('eq', 'https://instagram.com/me')

        cy.get('[data-test-id="footer-header-linkedin-link"]')
            .should('have.attr', 'href').and('eq', 'https://linkedin.com/me')

        cy.get('[data-test-id="footer-header-twitter-link"]')
            .should('have.attr', 'href').and('eq', 'https://twitter.com/me')
    })

    it('Tests internal links', () => {
        cy.get('[data-test-id="footer-internal-home-link"]')
            .contains('Home').click()
            .url().should('include', '/')

        cy.visit('/')
        cy.get('[data-test-id="footer-internal-pricing-link"]')
            .contains('Pricing').click()
            .url().should('include', '/pricing')

        cy.visit('/')
        cy.get('[data-test-id="footer-internal-contact-link"]')
            .contains('Contact').click()
            .url().should('include', '/contact')

        cy.visit('/')
        cy.get('[data-test-id="footer-internal-about-link"]')
            .contains('About').click()
            .url().should('include', '/about')
    })

    it('Tests external links', () => {
        cy.get('[data-test-id="footer-external-prototype-link"]')
            .contains('Prototype')
            .should('have.attr', 'href').and('eq', 'https://www.figma.com/community/file/1197507698947430863')

        cy.get('[data-test-id="footer-external-roadmap-link"]')
            .contains('Roadmap')
            .should('have.attr', 'href').and('eq', 'https://github.com/users/hammadmajid/projects/10')

        cy.get('[data-test-id="footer-external-license-link"]')
            .contains('License')
            .should('have.attr', 'href').and('eq', 'https://creativecommons.org/publicdomain/zero/1.0/')
    })

    it('Tests footer credit', () => {
        cy.get('[data-test-id="footer-credit-text"]').should('contain', 'Made with ♥ by')

        cy.get('[data-test-id="footer-credit-name"]').contains('Hammad Majid')
            .should('have.attr', 'href').and('eq', 'https://hammadmajid.com/')
    })
})

describe('Footer sign-up form works', () => {
    before(() => {
        cy.visit('/')
    })

    it('Tests sign up form', () => {
        cy.get('[data-test-id="footer-form-title"]')
            .contains('Get the latest updates')

        cy.get('[data-test-id="footer-form-field"]')
            .should('have.attr', 'required')
        cy.get('[data-test-id="footer-form-field"]').type('fakemail@example.com')
            .should('have.value', 'fakemail@example.com')

        cy.get('[data-test-id="footer-form-button"]')
            .contains('Subscribe').click()
            .url().should('include', '?')
    })
})

export { } // TS1028
