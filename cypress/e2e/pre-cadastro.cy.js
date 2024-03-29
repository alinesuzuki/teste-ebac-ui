/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Funcionalidade de Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    

    it('Deve completar o pré caadstro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste!@#')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type('Suzuki')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});