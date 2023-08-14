const inquirer = require('inquirer');
const fs = require('fs');

// License  badges for different license types
const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': ''
};
// Array of questions for inquirer prompts
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
// Prompt the user with the questions and generate the README
inquirer.prompt(questions).then(answers => {
    // Generate the content for the readme file in .md format
    const readmeText = `
# ${answers.title}

${licenseBadges[answers.license]}

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
To install this project, run the following commands:

\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
To run tests, use the following command:

\`\`\`
${answers.tests}
\`\`\`

## Questions
For any questions, please reach out to me on [GitHub](https://github.com/${answers.github}) or email me at ${answers.email}.
`;
    // Write the generated content to the README file
    fs.writeFile('README.md', readmeText, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated successfully!');
    });
});
