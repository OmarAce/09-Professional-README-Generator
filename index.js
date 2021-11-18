// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = [
    {   //Generates Title of Project
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {   //Description of Project
        type: 'input',
        name: 'description',
        message: 'What is the objective of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your Project!');
                return false;
            }
        }
    },
    {   //Project Installation
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please explain how to install your project!');
                return false;
            }
        }
    },
    {   //Usage Infomation
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a instructions on how to use your project!');
                return false;
            }
        }
    },
    {   //How to Contribute
        type: 'input',
        name: 'contribution',
        message: 'How can people help with this projects growth?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to your project!');
                return false;
            }
        }
    },
    {   //Test Instructions
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test your project!');
                return false;
            }
        }
    },
    {   //Licensing
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project.',
        choices: [
            {
                name: 'Apache',
                value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            },
            {
                name: 'MIT',
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            },
            {
                name: 'Mozilla-Public',
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            },
            {
                name: 'GNU-General-Public Version 3.0',
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            },
            {
                name: 'Creative Commons',
                value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
            },
            {
                name: 'None',
                value: "No License Chosen.",
            }
        ],
        filter: function(val) {
            return val.toString();
        },
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please select an option for licensing!');
                return false;
            }
        }
    },
    {   //Github
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the name of your GitHub Account!');
                return false;
            }
        }
    },
    {   //Email
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Your README has been generated!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("GeneratedREADME.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
