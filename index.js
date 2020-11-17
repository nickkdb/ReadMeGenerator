const inquirer= require('inquirer');
const fs= require('fs');
const md= require('./mdText');

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
        name: "license",
        message: "Choose a license for your project:",
        choices: ["Apache", "Boost", "MIT", "GNU GPLv3"]
    },
    {
        type: "input",
        name: "test",
        message: "Enter information on how to test your project:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    },
]).then(answers => {
    fs.writeFile(`README.md`, md.generate(answers), (err) => 
    err ? console.error(err) : console.log(`readMe was created succesfully!`)
    );
})