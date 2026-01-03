import { expect, type Locator, type Page } from '@playwright/test';

export class homepage {
 readonly page: Page;
 readonly assertionText : Locator;
  readonly error_msg : Locator;
  constructor(page: Page) {
   this.page = page;

 this.assertionText =page.locator("//li[10]//a[1]");
 this.error_msg= page.locator("//p[normalize-space()='Your email or password is incorrect!']");
  }

// Logged in as Rania
  async Assertion_happy_path(){
    await expect(this.assertionText).toBeVisible();
}
  async Assertion_negative_path(){
    await expect(this.error_msg).toBeVisible();
}
}