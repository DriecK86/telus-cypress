class pageLang {
  private get buttoneditPrimarylang() {
    return cy.get(".col-auto > .row");
  }
  private get editselectPrimarylang() {
    return cy.get(
      "#edit-language-form > .col-12 > :nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container"
    );
  }
  private get editselectprimaryproficiencyLang() {
    return cy.get(
      "#edit-language-form > .col-12 > .figma-input-field-margin > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container"
    );
  }
  private get primarybuttonSave() {
    return cy.get(
      "#edit-language-form > .col-12 > .pl-0 > .sui-gap-2 > .sui-c-btn-primary"
    );
  }
  private get buttondeleteotherLang() {
    return cy.get(".trash-div");
  }
  private get buttonalertdeleteotherLang() {
    return cy.get(".row > .sui-gap-2 > .sui-c-btn-primary");
  }
  private get buttoneditotherLang() {
    return cy.get(".col-lg-2 > .sui-rounded");
  }
  private get editselectotherLang() {
    return cy.get(
      "#new-language-form > .col-12 > :nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container"
    );
  }
  private get editselectotherproficiencyLang() {
    return cy.get(
      "#new-language-form > .col-12 > .figma-input-field-margin > .sc-dlnjwi > .row > .col-lg-12"
    );
  }
  private get otherbuttonSave() {
    return cy.get(
      "#new-language-form > .col-12 > .pl-0 > .sui-gap-2 > .sui-c-btn-primary"
    );
  }
  private get txtprimaryLang() {
    return cy.get(".primary-language .row .tw-font-bold", { timeout: 10000 });
  }
  private get txtprimaryPro() {
    return cy.get(".primary-language .row .mr-4", { timeout: 10000 });
  }
  private get txtotherLang() {
    return cy.get(".others .row .tw-font-bold", { timeout: 10000 });
  }
  private get txtotherPro() {
    return cy.get(".others .row .mr-4", { timeout: 10000 });
  }

  public clickEditLanguages() {
    this.buttoneditPrimarylang.click();
    this.buttondeleteotherLang.click();
    this.buttonalertdeleteotherLang.click();
    this.buttoneditotherLang.click();
  }
  public updateprimaryLanguages(pLang: string) {
    this.editselectPrimarylang.type(pLang + "{enter}");
  }
  public updateotherLanguages(oLang: string, oProf: string) {
    this.editselectotherLang.type(oLang + "{enter}");
    this.editselectotherproficiencyLang.type(oProf + "{enter}");
  }
  public saveupdateLanguage() {
    this.primarybuttonSave.click();
    this.otherbuttonSave.click();
  }
  public verifyLanguageupdates(
    pLang: string,
    pProf: string,
    oLang: string,
    oProf: string
  ) {
    this.txtprimaryLang.should("contain", pLang);
    this.txtprimaryPro.should("contain", pProf);
    this.txtotherLang.should("contain", oLang);
    this.txtotherPro.should("contain", oProf);
  }
}
export default new pageLang();
