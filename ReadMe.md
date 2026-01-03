For the GUI part:

Firstly, I used the Page Object Model (POM) design pattern, so I created a class for each page I interact with.

-The Landing Page is the main page of the website before login.

-The Login Page is where I enter my credentials.

-The Home Page is the page after login where I perform assertions.


I located all the elements needed on each page. Then, I prepared the login test cases:

-Two test cases: one for the positive scenario with valid credentials,

-And another for the negative scenario with invalid credentials.



-I centralized the base URL in the project configuration file.
-I also configured the framework to take screenshots on failure.
-For reporting, I used two types: HTML report and Allure report.

Additionally, I used a Test Data file with two rows:

-One for valid credentials,

-And another for invalid data.

This is a light scenario, but I tried to make the code readable, maintainable, and scalable.



For the APIs part:

I created two test cases:

-One for the positive scenario with valid data,

-And another for the negative scenario with invalid data.

I return the whole response, then split the status code and message to assert on both.
I also used the same test data file to keep the data centralized.