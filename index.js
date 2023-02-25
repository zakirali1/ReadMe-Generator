const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your ReadMe?",

    },

    {
        type: "input",
        name: "description",
        message: "Type in a description of your ReadMe?",

    },

    {
        type: "checkbox",
        name: "contents",
        message: "Choose the contents of your ReadMe?",
        choices: ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
        validate: function(choices) {
            if (choices.length !== questions[2].choices.length) {
            return "please select all choices"
        } else {
        return true
    }
}
    },  

    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions",

    },

    {
        type: "input",
        name: "usage",
        message: "Type filename of image to use for usage section",
        default: "screenshot.png"
    },

    {
        type: "list",
        name: "license",
        message: "Enter License information?",
        choices: ["Apache", "Boost", "GNUGPLv3", "MIT"],
        filter(val) {
            return val.toLowerCase();
        }
    },

    {
        type: "input",
        name: "contributing",
        message: "Names of any contributors to this project"
    },

    {
        type: "input",
        name: "tests",
        message: "Instructions for testing"
    },

    {
        type: "input",
        name: "git",
        message: "Input your GitHub username",
        
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }
   
];

function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
      
       err ? console.log(err) : console.log('Success!')
})
}

// function to initialize program
function init() {
    
    inquirer.prompt(questions).then((data) => {
        // if(err) {
        //     throw err; 
        // }
        console.log(data)
        // console.log(data.contents)

        writeToFile("sampleReadme.md", generateMarkdown(data));
    
        
    }) 
  
}

// function call to initialize program
init();
