import { HomePage } from "../../pages/HomePage";
import { HomeActions } from '../../actions/HomeActions';

describe("@acceptance Check Poke is correctly displayed", () => {
  const homeActions = new HomeActions();

  beforeEach(() => {
    cy.visit('');
  });

  it("Check Demoblaze Home Page title should be displayed", () => {
    homeActions.checkHomePageTitle();
  });

  it("Check Demoblaze Home Page bar title is correct", () => {
    homeActions.verifyHomePageNavbarTitle();
  });
});
