// function to generate markdown for README
function generateMarkdown(data) {

  let arr = [...data.contents];
  let arrEl = arr.forEach(element => {
    return `-${element}`
  })
  
  return(
    
    `# **${data.title}**

    # Description
    ${data.description} 

    # Table of Contents
    -${data.contents[0]}
    -${data.contents[1]}
    -${data.contents[2]}
    -${data.contents[3]}
    -${data.contents[4]}
    -${data.contents[5]}
    -${data.contents[6]}
    -${data.contents[7]}

  `); 
}

module.exports = generateMarkdown;
