const inquirer = require('inquirer');
const fs = require('fs');
// const { message };
// const prompt = () =>
inquirer.prompt(
  [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?',
      // error back
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description',
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation Instructions',
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Information',
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contribution Guidelines',
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test Instructions',
      validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    },

    // {
    //   type: 'list',
    //   name: 'category',
    //   message: 'Business or Pleasure?',
    //   choices: ['Work', 'Personal', 'Sandbox', 'Other'],
    //   validate: (value) => { if (value) { return true } else { return 'This field cannot be blank' } }
    // },
  ])
  .then(({
    title,
    description,
    installation,
    usage,
    contributing,
    test,

  }) => {
    // readME
    const readMe = `${title}

    // *[Description](#description)
    // *[Installation](#installation)
    // *[Usage](#usage)
    // *[Contributing](#contributing)
    // *[Test](#test)
    
    ${description}
    ${installation}
    ${usage}
    ${contributing}
    ${test}
    `;

    createNewFile(title, readMe);


  });
function createNewFile(fileName, data) {
  fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('readMe Created!')
  })
}