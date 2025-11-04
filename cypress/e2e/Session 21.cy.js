/// <reference types="cypress"/>

describe ('Data Driven 2', ()=>{
    it('Work with files',()=>{
        cy.writeFile('file1.txt', 'Parni Padi')
        cy.readFile('file1.txt').should('eq','Parni Padi')
        cy.readFile('cypress/fixtures/users.json').its('user1').its('firstName').should('eq','Parni')
        cy.readFile('cypress/fixtures/users.json').its('user2').its('lastName').should('eq','Ferdowsipour')
    })
    it('download file',()=>{
        cy.visit('https://www.play1.automationcamp.ir/forms.html')
        cy.get('#download_file').click()
        cy.wait(3000)
        cy.readFile('cypress/downloads/sample_text.txt').should('include','by AutomationCamp')
    })
    it('download file with link',()=>{
        cy.downloadFile('https://play1.automationcamp.ir/sample_text.txt', 'cypress/downloads/MyDownloads', 'MyText.txt')
        cy.readFile('cypress/downloads/MyDownloads/MyText.txt').should('include','by AutomationCamp')
    })
    it.only('upload file',()=>{
        cy.visit('https://www.play1.automationcamp.ir/forms.html', {action: 'drag-drop'})
        cy.get('#upload_cv').selectFile(['cypress/fixtures/Books.json'])
        cy.get('#validate_cv').should('have.text', 'Books.json')
    })
    it('upload multiple files',()=>{
        cy.visit('https://www.play1.automationcamp.ir/forms.html')
        cy.get('#upload_files').selectFile(["cypress/fixtures/Books.json","cypress/downloads/MyDownloads/MyText.txt"])
        cy.get('#validate_files').should('include.text', 'Books.json')
        cy.get('#validate_files').should('include.text', 'MyText.txt')
    })
})