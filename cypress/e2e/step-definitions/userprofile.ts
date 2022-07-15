import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/page-objects/loginpage";
import profileMenu from "../../support/page-objects/profilemenu";
import basicInfo from "../../support/page-objects/basicinfo";
import languagePage from "../../support/page-objects/languagepage";

//Scenario: Should be able to get in the login page
Given("that I visit telus test page", () => {
  cy.visit("/");
});
And("I enter my email {string} to Continue", (testEmail: string) => {
  loginPage.toContinue(testEmail);
});
When("I enter my password {string} to Sign in", (testPassword: string) => {
  loginPage.toSignin(testPassword);
});
Then("I should be see {string} page", (pageDashboard: string) => {
  cy.url().should("include", pageDashboard);
});
//Scenario: Should be able to edit my contact info and location
Given("that I am in the {string} page", (pageDashboard: string) => {
  cy.url().should("include", pageDashboard);
});
And("I click the my profile menu link in the profile icon", () => {
  profileMenu.toProfile();
});
And("headed to {string} page", (pageBasic: string) => {
  cy.url().should("include", pageBasic);
});
When(
  "I edit my middle name {string}, phone number {string} and address {string}",
  (mName: string, cNumber: string, address: string) => {
    basicInfo.editProfile(mName, cNumber, address);
  }
);
Then(
  "changes should appear {string},{string} and {string}",
  (mName: string, pNum: string, loc: string) => {
    basicInfo.verifychangesProfile(mName, pNum, loc);
  }
);

//Scenario: Should be able to change my language
Given("that I'm in the user profile page {string}", (pageBasic) => {
  cy.url().should("include", pageBasic);
});
And(
  "I click the Languages link and directed to {string} page",
  (pageLang: string) => {
    basicInfo.gotoLang();
  }
);
When("I click add", () => {
  languagePage.clickEditLanguages();
});
And("add {string} as primary", (lang: string, prof: string) => {
  languagePage.updateprimaryLanguages(lang);
});
And(
  "add {string} for other, with proficiency of {string}",
  (lang: string, prof: string) => {
    languagePage.updateotherLanguages(lang, prof);
  }
);
And("click Save", () => {
  languagePage.saveupdateLanguage();
});
Then(
  "changes should contains {string},{string},{string} and {string}",
  (pLang: string, pProf: string, oLang: string, oProf: string) => {
    languagePage.verifyLanguageupdates(pLang, pProf, oLang, oProf);
  }
);

//Scenario: Should be able to sign out
Given("that I'm in the {string} page", (pageLang: string) => {
  cy.url().should("include", pageLang);
});
When("I click the profile icon and also click the sign out link", () => {
  profileMenu.toSignout();
});
And("I should be in the {string} page", (pageLogout: string) => {
  cy.url().should("include", pageLogout);
});
