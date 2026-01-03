// loginFixture.ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  LoginFixeture: async ({ page }, use) => {

    // --- Login setup ---
    await page.goto('https://automationexercise.com/login');
    await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[2]', 'raniaali717@yahoo.com');
    await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[3]', 'Password@123');
    await page.click('//*[@id="form"]/div/div/div[1]/div/form/button');

    await use(page);

  }
});
