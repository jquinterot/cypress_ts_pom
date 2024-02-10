import { HomeActions } from "../../actions/HomeActions";
import { CartActions } from "../../actions/CartActions";
import { ProductActions } from "../../actions/ProductActions";
import { MenuOptions } from "../../helpers/enums/MenuOptions";
import { Products } from "../../helpers/enums/Products";

describe("@regression Check that a product can be added to the cart", () => {
  const homeActions = new HomeActions();
  const productActions = new ProductActions();
  const cartActions = new CartActions();

  beforeEach(() => {
    cy.visit('');
  });

  it("Check that a samsung cellphone can be added", () => {
    homeActions.selectCategory("Phones");
    homeActions.selectProduct(Products.GALAXY_S6);

    productActions.checkAddedProduct(Products.GALAXY_S6);
    productActions.checkProductPrice();
    productActions.addToCart();

    homeActions.selectMenuOption(MenuOptions.CART);

    cartActions.checkProductIsDisplayed(Products.GALAXY_S6);
  });
});
