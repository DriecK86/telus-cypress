class basicInfo {
  private get editbuttonContact() {
    return cy.get(
      ".figma-section-header-text-margin > .col-lg-2 > .sui-rounded"
    );
  }
  private get inputMiddlename() {
    return cy.get('input[name="middle_name"]');
  }
  private get inputPhonenumber() {
    return cy.get('input[name="phone_number.line_number"]');
  }
  private get buttonCancelcontact() {
    return cy.get(
      ".figma-form-buttons-margin > .sui-gap-2 > .sui-c-btn-secondary"
    );
  }
  private get buttonSavecontact() {
    return cy.get(
      ".figma-form-buttons-margin > .sui-gap-2 > .sui-c-btn-primary"
    );
  }
  private get editbuttonLocation() {
    return cy.get(":nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded");
  }
  private get selectCountry() {
    return cy.get(
      ".figma-input-field-length > :nth-child(1) > .sc-dlnjwi > .row > .col-lg-12 > .sui-c-input-dropdown-container > .sui-c-input-dropdown__control > .sui-c-input-dropdown__value-container"
    );
  }
  private get inputStreetaddress() {
    return cy.get('input[name="streetAddress"]');
  }
  private get buttonCancellocation() {
    return cy.get(".sui-gap-2 > .sui-c-btn-secondary");
  }
  private get buttonSaveLocation() {
    return cy.get(".col-auto > .pl-0 > .sui-gap-2 > .sui-c-btn-primary");
  }
  private get txtfullName() {
    return cy.get(".pb-2 > .col > .sui-text-b3", { timeout: 10000 });
  }
  private get txtContacnumber() {
    return cy.get(".mb-7 > .col > .sui-text-b3", { timeout: 10000 });
  }
  private get txtStreetAddress() {
    return cy.get(":nth-child(1) > .col-auto > .sui-text-b3", {
      timeout: 10000,
    });
  }
  private get linkLang() {
    return cy.get('[href="/cmp/contributor/userprofile/languages"]');
  }
  public editProfile(
    middleName: string,
    contactNumber: string,
    streetAddress: string
  ) {
    //clear first the fields
    this.editbuttonContact.click();
    this.editbuttonLocation.click();
    this.inputMiddlename.clear();
    this.inputPhonenumber.clear();
    this.selectCountry.type("Philippines{enter}");
    this.inputStreetaddress.clear();
    this.buttonSavecontact.click();
    this.buttonSaveLocation.click();
    // update the data per requirements
    this.editbuttonContact.click();
    this.editbuttonLocation.click();
    this.inputMiddlename.click().type(middleName);
    this.inputPhonenumber.click().type(contactNumber);
    this.selectCountry.type("Philippines{enter}");
    this.inputStreetaddress.type(streetAddress);
    this.buttonSavecontact.click();
    this.buttonSaveLocation.click();
  }
  public verifychangesProfile(mName: string, pNum: string, loc: string) {
    this.txtfullName.should("contain", mName);
    this.txtContacnumber.should("contain", pNum);
    this.txtStreetAddress.should("contain", loc);
  }
  public gotoLang() {
    this.linkLang.click();
  }
}
export default new basicInfo();
