import { expect, type Locator, type Page } from '@playwright/test';

export class loginpage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("//input[@data-qa='login-email']");
    this.password = page.getByRole('textbox', { name: 'password' });
    this.loginButton= page.getByRole('button', { name: 'Login' });
   
  }



  async enterLoginData(yourEmail , yourPassword) {
    await this.email.fill(yourEmail);
    await this.password.fill(yourPassword);
    await this.loginButton.click();
    await this.page.waitForTimeout(5000);
  }

 
}