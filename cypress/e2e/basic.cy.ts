describe('empty spec', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays the correct heading', () => {
        cy.get('h1')
            .contains('Astro');
    })
})