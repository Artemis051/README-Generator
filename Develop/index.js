// TODO: Include packages needed for this application
import('inquirer').then((inquirerModule) => {
    const fs = require('fs');
    const inquirer = inquirerModule.default;

  const generateMarkdown=require('./utils/generateMarkdown')
  
    // TODO: Create an array of questions for user input
    const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'ISC', 'None']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
    ];
  
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`${fileName} created successfully!`);
        }
      });
    }
  
    // TODO: Create a function to generate markdown for README
    
  
    // TODO: Create a function to initialize app
    function init() {
        // inquirer prompt
        inquirer.prompt(questions)
            .then((answers) => {
                const readmeContent = generateMarkdown(answers);

                writeToFile('dist/README.md', readmeContent);
            })
            .catch((error) => console.error(error));
    }

    init();
});
  