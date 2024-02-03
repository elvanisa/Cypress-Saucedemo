import cartPage from '../../../support/pageObject/cartPage'
const userData = require('../../../fixtures/userData.json')

describe('Verify Saucedemo Login Functionlity', () => {
  
  it('Verify to add products to cart', () => {
    cy.visit('')
    cy.login(Cypress.env('username'),Cypress.env('password'))
    cy.get(cartPage.backpack).click()
    cy.get(cartPage.bike).click()
    cy.get(cartPage.cartLink).click()
    cy.url().should('contain','/cart.html')
  })
  
})