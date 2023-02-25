// function to generate markdown for README
function generateMarkdown(data) {

  // let arr = [...data.contents];
  // let arrEl = arr.forEach(element => {
  //   return `-${element}`
  // })
  const licenseBadge = (license) => {
    
    let badge = {
      apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", 
      gnugplv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

      // Apache", "Boost", "BSD","Creative Commons", "GNUGPLv3", "MIT", "Zlib"
    }
    return badge[license]

  };

  const licenseDetails = license => {
    let licenseLinks = {
      apache: "[APACHE](https://choosealicense.com/licenses/apache-2.0/)",
      mit: "[MIT](https://choosealicense.com/licenses/mit/)",
      gnugplv3: "[GNUGPLV3](https://choosealicense.com/licenses/gpl-3.0/)",
      boost: "[BOOST](https://choosealicense.com/licenses/bsl-1.0/)"
    }
    return licenseLinks[license]
  };

  const licenseText = license => {
    if(license) {
      return ` This is licensed under ${(licenseDetails(license))} license`;
    }
  }

  // https://img.shields.io/github/languages/top/lernantino/badmath
  return(
    
    `# ${data.title}

  ${licenseBadge(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents
  - [${data.contents[0]}](#description)
  - [${data.contents[1]}](#table-of-contents)
  - [${data.contents[2]}](#installation)
  - [${data.contents[3]}](#usage)
  - [${data.contents[4]}](#license)
  - [${data.contents[5]}](#contributing)
  - [${data.contents[6]}](#tests)
  - [${data.contents[7]}](#questions)
  ## Installation 
    ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${(licenseText(data.license))}
 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.git}
  
  ${data.email}
  `); 
}

module.exports = generateMarkdown;


// "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"