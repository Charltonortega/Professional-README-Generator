const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

inquirer.prompt(questions).then(answers => {
    const readmeText = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please reach out to me on [GitHub](https://github.com/${answers.github}) or email me at ${answers.email}.
`;

    fs.writeFile('README.md', readmeText, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated!');
    });
});
