/// <reference types="cypress" />

context('Funcionalidade Login',() => {

    it('Deve fazer login com sucesso',() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    })  

    //aluno_ebac@teste.com
    it('Deve exibir uma mensagem de erro ao inserir usuário e senha inválidos', () => {


    })

})
