import { HomeActions } from "../../actions/HomeActions";
import { CartActions } from "../../actions/CartActions";
import { ProductActions } from "../../actions/ProductActions";
import { PlaceOrderActions } from "../../actions/PlaceOrderActions";
import { MenuOptions } from "../../helpers/enums/MenuOptions";
import { Products } from "../../helpers/enums/Products";
import { johnInfo } from "../../helpers/objects/CustoemrInfo";
import { johnCardInfo } from "../../helpers/objects/CardInfo";

describe("@acceptance Check Poke is correctly displayed", () => {
  const homeActions = new HomeActions();
  const productActions = new ProductActions();
  const cartActions = new CartActions();
  const placeOrderActions = new PlaceOrderActions();

  beforeEach(() => {
    cy.visit("");
  });

  it("Check Demoblaze Home Page title should be displayed", () => {
    homeActions.selectCategory("Phones");
    homeActions.selectProduct(Products.GALAXY_S6);

    productActions.checkAddedProduct(Products.GALAXY_S6);
    productActions.checkProductPrice();
    productActions.addToCart();

    homeActions.selectMenuOption(MenuOptions.CART);

    cartActions.checkProductIsDisplayed(Products.GALAXY_S6);
    cartActions.deleteProductFromCard(Products.GALAXY_S6);
    cartActions.selectPlaceOrder();

    placeOrderActions.fillName(johnInfo.name);
    placeOrderActions.fillCountry(johnInfo.country);
    placeOrderActions.fillCity(johnInfo.city);
    placeOrderActions.fillCard(johnCardInfo.number);
    placeOrderActions.fillMonth(johnCardInfo.month);
    placeOrderActions.fillYear(johnCardInfo.year);

    placeOrderActions.selectPurchase();
    placeOrderActions.isThankYouMessageIsDisplayed();
  });
});
