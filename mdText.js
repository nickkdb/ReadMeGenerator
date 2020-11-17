function generate(input) {
    var choice;
    switch(input.license) {
        case "Apache":
        choice = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
        case "Boost":
        choice = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
        case "MIT":
        choice= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
        case "GNU GPLv3":
        choice= "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    return ` # ${input.title}
    
## Table of Contents
- Description(#Description)
- License
- Installation
- Usage
- Testing
- Contributing
- Questions
    
## Description
> ${input.desc}

## License
> ${choice} - this project is protected by the ${input.license} license

## Installation
> ${input.install}

`
}

module.exports = {generate};