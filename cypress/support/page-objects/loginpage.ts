class loginPage {
  private get inputEmail() {
    return cy.get('input[name="email"]');
  }
  private get buttonContinue() {
    return cy.contains("button", "Continue");
  }
  private get inputPassword() {
    return cy.get('input[name="password"]');
  }
  private get buttonSignin() {
    return cy.get(".sc-eCApnc > .sui-rounded");
  }
  public toContinue(testEmail: string) {
    this.inputEmail.should("be.visible").type(testEmail);
    this.buttonContinue.click();
  }
  public toSignin(testPassword: string) {
    this.inputPassword.should("be.visible").type(testPassword);
    this.buttonSignin.click();
  }
}
export default new loginPage();
