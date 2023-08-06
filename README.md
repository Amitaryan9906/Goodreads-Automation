
![Logo](https://i0.wp.com/nhfpl.org/wp-content/uploads/2022/05/New-GoodReads-Logo.png?resize=300%2C157&ssl=1)

# Goodreads Project

## Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Features](#features)
- [Test Cases](#test-cases)
- [Manual Testing](#manual-testing)
- [Test Coverage and Traceability](#test-coverage-and-traceability)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)


## Introduction <a name="introduction"></a>
Goodreads is an American social cataloging website and a subsidiary of Amazon that allows individuals to search its database of books, annotations, quotes, and reviews. Users can sign up and register books to generate library catalogs and reading lists.
## Tech Stack <a name="tech-stack"></a>
The project utilizes the following technologies and tools:

Cypress: An end-to-end testing framework for web applications.
JavaScript: The programming language used to write test scripts.
Mocha: A testing framework used for organizing and executing test cases.
Chai: An assertion library for writing assertions in test cases.
Page Object Model (POM) pattern: Used to organize and separate test logic from the page-specific elements and actions.
## Features <a name="features"></a>
User registration and login
- Search for books in the database
- Add books to reading lists and favorites
- Write and view book reviews
- Connect with other users and join book clubs
## Test Cases <a name="test-cases"></a>
The project includes automated test cases using Cypress for various functionalities such as user login, book search, adding books to reading lists, and more.
## Manual Test Cases and Report <a name="manual-testing"></a>
For manual testing, we have a set of well-documented test cases covering various scenarios and functionalities. The manual test cases and test reports can be found in the Manual_test_cases_and_reports folder.

#### Here is the manual testing TestCases & Report folder:
[Manual_test_cases_and_reports](https://github.com/Amitaryan9906/Goodreads-Automation/tree/main/Manual_test_cases_and_reports) 

The manual test report includes details of test executions, defects found, and feedback for improvement. It serves as a valuable resource for the testing team and other stakeholders.
## Test Coverage and Traceability <a name="test-coverage-and-traceability"></a>
Both automated and manual test cases are designed to achieve comprehensive test coverage. Each test case is traceable to specific requirements, allowing us to validate that all functional and non-functional aspects of the application are adequately tested.
## Getting Started <a name="getting-started"></a>
To set up and run the test automation project, follow these steps:

1. Clone the repository to your local machine.
 https://github.com/Amitaryan9906/Goodreads-Automation.git

2. Install Node.js: If you don't have Node.js installed, you can download and install it from the official website: https://nodejs.org/

3. Install project dependencies: Open a terminal/command prompt, navigate to the project directory, and run the following command to install the required dependencies:

Initialize a  project:

Copy code
```
npm init -y
```

Install Cypress as a dev dependency:

Copy code
```
npm install cypress --save-dev
```

To open the Cypress Test Runner, run the following command:

Copy code
```
npx cypress open
```




4. Configure test data: Update the credentials.json file with valid credentials for logging in to the Goodreads website.
https://www.goodreads.com/

5. Run the tests: To run the test suite, use the following command:

Copy code
```
npx cypress run
```
## Screenshots <a name="screenshots"></a>
#### Running Tests on console:

![Running Tests on console](https://github.com/Amitaryan9906/Goodreads-Automation/blob/main/Manual_test_cases_and_reports/Homepage.js%20-%20Goodreads-Automation%20-%20Visual%20Studio%20Code%2006-08-2023%2018_17_07.png?raw=true)

#### Failiure Tests

![App Screenshot](https://github.com/Amitaryan9906/Goodreads-Automation/blob/main/cypress/screenshots/HomePage/Homepage.js/Login%20to%20the%20goodreads.com%20and%20Run%20All%20Test%20Cases%20--%20TC_021%20Verify%20the%20existence%20of%20the%20Remove%20from%20my%20books%20option%20on%20the%20My%20Books%20page%20(failed).png?raw=true)

![App Screenshot](https://github.com/Amitaryan9906/Goodreads-Automation/blob/main/cypress/screenshots/HomePage/Homepage.js/Login%20to%20the%20goodreads.com%20and%20Run%20All%20Test%20Cases%20--%20TC_022%20Verify%20the%20existence%20of%20the%20Profile%20Menu%20option%20on%20the%20profile%20icon%20on%20navbar%20(failed).png?raw=true)

![App Screenshot](https://github.com/Amitaryan9906/Goodreads-Automation/blob/main/cypress/screenshots/Login/login.js/Login%20to%20the%20goodreads.com%20and%20Run%20All%20Test%20Cases%20--%20TC_034%20Checking%20login%20by%20invalid%20email%20format%20in%20the%20email%20field%20(failed).png?raw=true)

check reports to view all


## Contributing <a name="contributing"></a>
Contributions are welcome! To contribute to the project, follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make changes and commit them: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a pull request
## License <a name="license"></a>
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
