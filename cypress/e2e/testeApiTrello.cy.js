describe('Testes de API(Trello)', () => {
    it('Criar novo board', () => {
        cy.CriarBoard()
    })

    it('Criar novo Card', () => {
        cy.CriarCard()
    })

    it('Deletar Card', () => {
        cy.DeletarCard()
    })
    it('Deletar board', () => {
        cy.DeletarBoard()
    })
})
