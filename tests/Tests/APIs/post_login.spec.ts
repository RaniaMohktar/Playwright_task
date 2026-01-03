import {expect, test } from '@playwright/test';
import myData from '../../../TestData/logindata';  


// our parameters for happy path
const parameters = {
  email: myData[0].email ,
  password: myData[0].password
};
// our parameters for negative path
const parameters_2 = {
  email: myData[1].email ,
  password: myData[1].password
};
//our request with valid data 

test('test postRequest for login_valid', async ({ request }) => {
  const response = await request.post(
    'https://automationexercise.com/api/verifyLogin',
    {
      form: parameters
    }
  );

//Assertions
   expect(await response.status()).toBe(200);

    const responseBody= await response.json();

    expect(responseBody.message).toBe('User exists!');

});

//our request with invalid data

test.only('test postRequest for login_invalid', async ({ request }) => {
  const response_2 = await request.post(
    'https://automationexercise.com/api/verifyLogin',
    {
      form: parameters_2
    }
  );
 
//Assertions
   expect.soft(await response_2.status()).toBe(400);

    const responseBody= await response_2.json();

    expect.soft(responseBody.message).toBe('User not found!');
});