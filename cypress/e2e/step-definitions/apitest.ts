import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

let urlTest: string = "";
//Scenario:This should render status 200 with response body for GET request
Given("url {string}", (endpoint: string) => {
  urlTest = endpoint;
});
When("I send a {string} request", (req: string) => {
  cy.request(req, urlTest).as("request");
});
Then(
  "it should have status of {string} and it should have {string}",
  (status: string, currency: string) => {
    cy.get("@request").should((response) => {
      expect(response).to.have.property("status", +status);
      expect(response.body).to.not.be.null;
      expect(response.body).to.include(currency);
    });
  }
);
