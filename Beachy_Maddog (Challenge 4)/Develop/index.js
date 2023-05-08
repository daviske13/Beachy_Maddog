// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your project:',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project:',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project:',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },

];


// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`README file "${fileName}" has been successfully created!`);
    });
}


// TODO: Create a function to initialize app
const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage:'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?'
    },

    {
        type: 'input',
        name: 'questions',
        message: 'What should users do if they have questions about your project?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
    ])

    .then((answers) => {
        const markdown = generateMarkdown(answers);
        
        writeToFile('README.md', markdown);
    })

    .catch((err) => {
        console.log(err);
    });
}


// Function call to initialize app
init();
