const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function teamProfileGenerator() {
    console.log(`
    ===============
    Add Team Member
    ===============
    `);
    return inquirer.prompt ([
        {
            //Manager name
            type: 'input',
            name: 'managerName',
            message: "Team manager's name: (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name");
                    return false;
                }
            }
        },
        {
            //Employee ID
            type: 'input',
            name: 'managerEmpId',
            message: "Team manager's employee ID: (Required)",
            validate: managerEmpIdInput => {
                if (managerEmpIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID");
                    return false;
                }
            }
        },
        {
            //Email address
            type: 'input',
            name: 'managerEmail',
            message: "Team manager's email: (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email");
                    return false;
                }
            }
        },
        {
            //Office number
            type: 'input',
            name: 'managerOfficeNum',
            message: "Team manager's office number: (Required)",
            validate: managerOfficeNumInput => {
                if (managerOfficeNumInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'anotherEmployee',
            message: 'Would you like to add an engineer, intern, or are you done adding employees?',
            choices: ['Engineer', 'Intern', "I'm done"]
        }
    ]).then()
}

teamProfileGenerator();