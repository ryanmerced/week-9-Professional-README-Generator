// TODO: Include packages needed for this application
//Writes files
const fs = require("fs");
//Asks user for data
const inquirer = require("inquirer");
//Generate markdown file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Welcome to the README File Generator. Please press 'ENTER' to begin.",
        name: "welcome"
    },
    {
        type:"input",
        message: "Please enter your project title (Note: Must match GitHub project title for deployed links to function correctly): ",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter your project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter your installation instructions: ",
        name: "installins"
    },
    {
        type: "input",
        message: "Please enter your usage information: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines: ",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter your test instructions: ",
        name: "testins"
    },
    {
        type: "list",
        message: "Please choose a license applicable to your project.",
        name: "license",
        choices: ["Apache 2.0","MIT","None Applicable"],
        default: "None"
    },
    {
        type: "input",
        message: "Please enter your GitHub username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your e-mail address: ",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    generateMarkdown(data);
    fs.writeFile('./utils/README.md', readMeString, (err) =>
        err ? console.error(err) : console.log("README.md file successfully created!")
    )
}

// TODO: Create a function to initialize app
function init() {
    //Ask the user the questions
        inquirer
            .prompt([ 
                ...questions
            ])
            .then((response) => {
                writeToFile(response);
            });
    }

// Function call to initialize app
init();

