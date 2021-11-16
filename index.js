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
        message: 'Please describe what your project accomplishes.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide a description of your Project!');
                return false;
            }
        }
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
