describe('Testes de API(Trello)', () => {
    it('Criar novo board', () => {
        cy.CriarBoard()
    })
    
    it('Criar nova List', () => {
        cy.CriarLista()
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
