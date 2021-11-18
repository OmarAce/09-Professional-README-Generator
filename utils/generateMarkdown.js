// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Additional Info](#additional-info)

  ## License:
  ${data.licensing}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Testing:
  ${data.testing}

  ## Contribution:
  ${data.contribution}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
