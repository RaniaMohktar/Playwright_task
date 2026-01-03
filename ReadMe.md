# Automation Project Overview

This project contains **GUI** and **API** test automation scenarios, designed to be **readable, maintainable, and scalable**.

---

## **GUI Automation**

I used the **Page Object Model (POM)** design pattern for the GUI part, creating a class for each page I interact with:

- **Landing Page**: The main page before login.
- **Login Page**: Where credentials are entered.
- **Home Page**: The page after login where assertions are performed.

### **Test Preparation**
- All necessary elements on each page were located.
- **Login test cases** were prepared:
  - **Positive scenario**: valid credentials.
  - **Negative scenario**: invalid credentials.
- **Base URL** is centralized in the project configuration file.
- **Screenshots** are captured automatically on test failure.
- **Reporting**:
  - HTML report
  - Allure report

### **Test Data**
- A test data file is used with **two rows**:
  - Valid credentials
  - Invalid credentials

> This is a light scenario, but the code is designed to be **clean, maintainable, and scalable**.

---

## **API Automation**

### **Test Cases**
- **Positive scenario**: using valid data.
- **Negative scenario**: using invalid data.

### **Implementation**
- The full API response is returned.
- Status code and message are extracted separately for assertions.
- The same centralized **test data file** is used.

