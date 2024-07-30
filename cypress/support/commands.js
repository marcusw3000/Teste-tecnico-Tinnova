const auth = require('../services/auth.json')
let idList;
let cardId;

Cypress.Commands.add('CriarBoard', () => {
    cy.request({
        method: 'POST',
        url: '/boards/',
        failOnStatusCode: false,
        qs: {
            "name": 'teste123',
            "key": auth.apiKey,
            "token": auth.authKey
        }
        }).then((response) => {
        expect(response.status).to.eq(200)
        idList = response.body.id;
        cy.log('Board ID:', idList);
    })
})


Cypress.Commands.add('DeletarBoard', () => {
    cy.request({
        method: 'DELETE',
        url: '/boards/'+idList,
        failOnStatusCode: false,
        qs: {
            "key": auth.apiKey,
            "token": auth.authKey
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('CriarCard', () => {
    cy.request({
        method: 'POST',
        url: '/cards/',
        failOnStatusCode: false,
        qs: {
            "idList": auth.idList,
            "key": auth.apiKey,
            "token": auth.authKey
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        cardId = response.body.id;
        cy.log('Card ID:', cardId);
    })
})

Cypress.Commands.add('DeletarCard', () => {
    cy.request({
        method: 'DELETE',
        url: '/cards/'+cardId,
        failOnStatusCode: false,
        qs: {
            "key": auth.apiKey,
            "token": auth.authKey
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})