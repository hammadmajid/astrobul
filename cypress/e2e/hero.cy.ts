describe('Test Hero section on homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Displays the correct heading', () => {
        cy.get('h1')
            .contains('Astro');
    })
})

export{}
