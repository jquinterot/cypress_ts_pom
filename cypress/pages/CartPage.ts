export class CartPage {
    getAddedProductTitle = (product:string) =>  cy.get('td').contains(`${product}`);
    getDeleteButton = () =>  cy.contains('Delete');
    getPlaceOrderButton = () =>  cy.get('button.btn-success').contains(`Place Order`);
  }