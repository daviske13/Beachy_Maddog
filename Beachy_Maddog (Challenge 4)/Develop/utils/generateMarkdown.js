// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

module.exports = generateMarkdown;

## Description

${data.description}

## Table of Contents

${renderLicenseLink(data.license)}
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

${renderLicenseSection(data.license)}
`;
}
