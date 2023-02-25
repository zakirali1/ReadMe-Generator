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
        name: "Usage",
        message: "Enter Usage information"
    },

    {
        type: "list",
        name: "license",
        message: "Enter License information?",
        choices: [,"Apace License 2.0", "Boost", "BSD","Creative Commons", "GNU GPL v3", "MIT", "Zlib"]
    },

    {
        type: "input",
        name: "contributing",
        message: "Enter Contributing information"
    },

    {
        type: "input",
        name: "tests",
        message: "Instructions for testing"
    },

    {
        type: "input",
        name: "questions",
        message: "Input your GitHub username"
    }
   
];

// inquirer.prompt(questions).then((data) => {
//     // if(err) {
//     //     throw err; 
//     // }
//     console.log(data)

    
// }) 
// function to write README file
function writeToFile(fileName, data) {
    // let fileName = "sampleReadme.md";
    // let fileContent = generateMarkdown(data);
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
