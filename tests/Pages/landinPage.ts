import { expect, type Locator, type Page } from '@playwright/test';

export class landingPage {
 readonly page: Page;
 readonly login_Button : Locator;

  constructor(page: Page) {
   this.page = page;

 this.login_Button =page.locator("//a[normalize-space()='Signup / Login']");

  }

// Logged in as Rania
  async click_on_logibButton(){
        await this.page.goto('');
       await this.login_Button.click();

}
}