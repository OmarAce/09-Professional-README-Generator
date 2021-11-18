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
        message: 'Please provide a description of your project\'s functionality.',
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
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
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
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
