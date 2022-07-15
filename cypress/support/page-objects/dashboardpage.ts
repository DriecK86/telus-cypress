class dashboardPage {
  private get iconButtonProfile() {
    return cy.get(".sui-flex .sui-rounded-full");
  }
  private get linkMyprofile() {
    return cy.get(".sui-pb-4 > :nth-child(2) > .sui-cursor-pointer");
  }
  public toProfile() {
    this.iconButtonProfile.click();
    this.linkMyprofile.click();
  }
}
export default new dashboardPage();
