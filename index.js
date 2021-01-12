const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
   "Project Title?"
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
    fs.writeFileSync('log.txt', answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });