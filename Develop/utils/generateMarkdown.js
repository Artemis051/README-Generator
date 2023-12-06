// TODO: Create a function that returns a license badge based on which license is passed in
// return empty string if there's no license


function renderLicenseBadge(license) {
  if (license !=='None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// return empty string if there's no license
function renderLicenseLink(license) {
  if (license !=='None') {
    return `- [License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// return empty string if there's no license
function renderLicenseSection(license) {
  if (license !=='None') {
    return `## License\nLicensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
  
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at ${data.email}. Visit my GitHub profile at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
