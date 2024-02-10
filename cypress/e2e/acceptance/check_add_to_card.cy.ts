import HomePage from "../../pages/HomePage";
describe('@acceptance Check Poke is correctly displayed', () => {

        const homepage= new HomePage;
     
        beforeEach(() => {
            cy.visit('https://www.demoblaze.com/')
        })
    
        it('Check Demoblaze Home Page title should be displayed', () => {
            expect(cy.title().should('eq', 'STORE'));
        })

        it('Check Demoblaze Home Page bar tittle is correct', () => {
            expect(homepage.getNavBarTitle().should('contains.text', 'PRODUCT STORE'));
        }) 
})