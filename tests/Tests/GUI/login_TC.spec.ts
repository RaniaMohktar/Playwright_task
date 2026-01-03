import { test } from '@playwright/test';
import { landingPage } from '../../Pages/landinPage';
import { loginpage } from '../../Pages/loginpage';
import { homepage } from '../../Pages/homepage';
import myData from '../../../TestData/logindata';  




//happy path

 test('Test_login_with valid data', async ({ page }) => {
     const landing = new landingPage(page);
   const login = new loginpage(page);
   const homme = new homepage(page);
   await landing.click_on_logibButton();
   await login.enterLoginData(myData[0].email, myData[0].password);
   await homme.Assertion_happy_path();

 });


//negative path 
 test('Test_login_with invalid data', async ({ page }) => {
     const landing = new landingPage(page);
   const login = new loginpage(page);
   const homme = new homepage(page);
   await landing.click_on_logibButton();
   await login.enterLoginData(myData[1].email, myData[1].password);
    await homme.Assertion_negative_path();
   //await homme.Assertion_happy_path();  you can uncomment this to see the screenshot on failure 

 });


























