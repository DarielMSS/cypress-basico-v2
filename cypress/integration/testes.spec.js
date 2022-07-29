
/// <reference types="Cypress" />

describe('FF Orbi Plataforma', function() {
  
    beforeEach(function(){
      cy.visit('https://azuq-br-ff-orbi.azurewebsites.net/home/')
    })
    
    it('verifica o título da aplicação', function() {  
      cy.title().should('be.equal','FF Orbi|Plataforma')
    })
  
    it.only('acessar e realizar login',function(){
       
        
   
    
      })
  })