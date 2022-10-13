/// <reference types="cypress" />
// @ts-ignore

 describe('Test 1', () => {
    it('Creates a new user', () => {
        cy.visit('localhost:3000');

        cy.get('button').should('contain', 'Add User').click();

        cy.get('h1').should('contain', 'Create New User');

        cy.get('input[name=first_name]').focus().type(
            'Silver'
        ).should('have.value', 'Silver');

        cy.get('input[name=last_name]').focus().type(
            'Lipp'
        ).should('have.value', 'Lipp');

        cy.get('input[name=phone_nb]').focus().type(
            '56560988'
        ).should('have.value', '56560988');

        cy.get('input[name=age]').focus().type(
            '20'
        ).should('have.value', '20');

        cy.get('input[name=date_of_birth]').focus().type(
            '2022-09-02'
        ).should('have.value', '2022-09-02');

        cy.get('input[name=gender]').focus().type(
            'male'
        ).should('have.value', 'male');

        cy.get('input[name=religion]').focus().type(
            'none'
        ).should('have.value', 'none');

        cy.get('input[name=city]').focus().type(
            'Põlva'
        ).should('have.value', 'Põlva');

        cy.get('input[name=disability]').focus().type(
            'none'
        ).should('have.value', 'none');

        cy.get('button[name=save]').click("center").wait(200).click("center");

        cy.get('div').should('contain.text', 'Silver').should('contain.text', 'Lipp');
    })
})

 describe('Edit User', () => {
    it ('edits personal info of an existing user', () => {
        cy.visit('localhost:3000');

        cy.get('[id="3"]').click();

        cy.get('input[name="phone_nb"]').clear();

        cy.get('input[name="phone_nb"]').type(
            '5116834'
        ).should('have.value', '5116834');

        cy.get('button[name="edit"]').click();

        cy.get('[id="4"]').click();

        cy.get('[id="3"]').click().get('input[name="phone_nb"]').should('have.value', '5116834');

    })
})

 describe('Test 3', () => {
    it ('Delete user', () => {
        cy.visit('localhost:3000');

        cy.get('[id="3"]').click();

        cy.get('button[name="delete"]').click();

        cy.get('[id="3"]').should('not.contain.text', 'Saluson');
    })
})