class profileMenu {
  private get iconButtonProfile() {
    return cy.get(".sui-flex .sui-rounded-full");
  }
  private get linkMyprofile() {
    return cy.get(".sui-pb-4 > :nth-child(2) > .sui-cursor-pointer");
  }
  private get linkSignout() {
    return cy.get(":nth-child(3) > .sui-cursor-pointer > .sui-ml-sm");
  }

  public toProfile() {
    this.iconButtonProfile.click();
    this.linkMyprofile.click();
  }
  public toSignout() {
    this.iconButtonProfile.click();
    this.linkSignout.click();
  }
}
export default new profileMenu();
