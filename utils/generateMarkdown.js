// function to generate markdown for README
function generateMarkdown(data) {

  // let arr = [...data.contents];
  // let arrEl = arr.forEach(element => {
  //   return `-${element}`
  // })

  // https://img.shields.io/github/languages/top/lernantino/badmath
  return(
    
    `#** ${data.title}**
     ![License](https://img.shields.io/github/${data.license}/zakirali1/ReadMe-Generator)

    # Description
    ${data.description} 

    # Table of Contents
    -[${data.contents[0]}](#description)
    -[${data.contents[1]}](#table-of-contents)
    -[${data.contents[2]}](#installation)
    -[${data.contents[3]}](#usage)
    -[${data.contents[4]}](#license)
    -[${data.contents[5]}](#contributing)
    -[${data.contents[6]}](#tests)
    -[${data.contents[7]}](#questions)

    #Installation 
    ${data.installation}

    #Usage
    ${data.usage}

    #License
    ${data.license}

    #Contributing
    ${data.contributing}

    #Tests
    ${data.tests}

    #Questions
    ${data.questions}
  `); 
}

module.exports = generateMarkdown;


// "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"