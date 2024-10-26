# Sauce Demo E-Commerce Testing

## Overview
This project contains automated tests for the Sauce Demo e-commerce site, using Cypress as the testing framework. The tests cover user login, product addition to the cart, and the purchase process.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).
  
## Installation
   
1. **Navigate to the Project Directory:**
   - Open the terminal or command prompt.
   - Change to the project directory:
    
     cd path/to/your/project-directory
    

2. **Install Dependencies:**
   - Run the following command to install the required dependencies:
         npm install

3. **Verify Cypress Installation:**
   - After the installation completes, can verify that Cypress was installed successfully by checking the version with the following command:
    
     npx cypress --version
     

## Running the Tests

1. **Open Cypress:**
   - Use the following command to open the Cypress Test Runner:
     npx cypress open
     
   - This will launch the Cypress GUI, allowing to see all available test files.

2. **Run Tests:**
   - From the Cypress Test Runner, can select individual tests to run.

3. **View Results:**
   - After running the tests, we can view the results directly in the Cypress interface.

## Assumptions
- The tests are designed to run in a stable environment; any changes to the Sauce Demo website may affect test outcomes.


## Limitations
- **Browser Compatibility**: 
  - The tests may exhibit inconsistent behavior across different browsers. For example, the tests fail in Chrome, while it works correctly in Firefox and Edge. 
    In headless mode for Chrome, the login test run fine.
