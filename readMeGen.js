const inquirer= require('inquirer');
const fs= require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter your project title:?" 
    },
    {
        type: "input",
        name: "desc",
        message: "Enter a description of your project:"
    },
    {
        type: "input",
        name: "install",
        message: "Enter instructions on how to install your program:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter information on how to use your program:"
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter information on how others can contribute to your program:"
    },
    {
        type: "list",
        name: "test",
        message: "Enter information on how to test your project:",
        choices: ["Apache", "Boost", "MIT", "GNU GPLv3"]
    },
]).then(answers => {
    fs.writeFile(`README.md`, goWrite(), (err) => 
    err ? console.error(err) : console.log(`success`)
    );
})