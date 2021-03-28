const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamData = [];


function promptManager() {
    return inquirer.prompt ([
        {
            //Manager name
            type: 'input',
            name: 'employeeName',
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
            name: 'employeeId',
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
            name: 'employeeEmail',
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
        }
    ]).then(managerData => {
        teamData.push(managerData);
        addTeamMember();
    })
};

function addTeamMember() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'anotherEmployee',
            message: 'Would you like to add an engineer, intern, or are you done adding employees?',
            choices: ['Engineer', 'Intern', "I'm done"]
        }
    ).then(teamMemberType => {
        if (teamMemberType.anotherEmployee === 'Engineer') {
            return inquirer.prompt ([
                {
                    //Engineer name
                    type: 'input',
                    name: 'employeeName',
                    message: "Engineer's name: (Required)",
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name");
                            return false;
                        }
                    }
                },
                {
                    //Employee ID
                    type: 'input',
                    name: 'employeeEmpId',
                    message: "Engineer's employee ID: (Required)",
                    validate: engineerEmpIdInput => {
                        if (engineerEmpIdInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's employee ID");
                            return false;
                        }
                    }
                },
                {
                    //Email address
                    type: 'input',
                    name: 'employeeEmail',
                    message: "Engineer's email: (Required)",
                    validate: engineerEmailInput => {
                        if (engineerEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's email");
                            return false;
                        }
                    }
                },
                {
                    //GitHub username
                    type: 'input',
                    name: 'engineerGitHub',
                    message: "Engineer's GitHub username: (Required)",
                    validate: engineerGitHubInput => {
                        if (engineerGitHubInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's GitHub username");
                            return false;
                        }
                    }
                }
            ]).then(engineerData => {
                teamData.push(engineerData);
                addTeamMember();
            })
        } else if (teamMemberType.anotherEmployee === 'Intern') {
            return inquirer.prompt ([
                {
                    //Intern name
                    type: 'input',
                    name: 'employeeName',
                    message: "Intern's name: (Required)",
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's name");
                            return false;
                        }
                    }
                },
                {
                    //Employee ID
                    type: 'input',
                    name: 'employeeEmpId',
                    message: "Intern's employee ID: (Required)",
                    validate: internEmpIdInput => {
                        if (internEmpIdInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's employee ID");
                            return false;
                        }
                    }
                },
                {
                    //Email address
                    type: 'input',
                    name: 'employeeEmail',
                    message: "Intern's email: (Required)",
                    validate: internEmailInput => {
                        if (internEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's email");
                            return false;
                        }
                    }
                },
                {
                    //School
                    type: 'input',
                    name: 'internSchool',
                    message: "Intern's school: (Required)",
                    validate: internSchoolInput => {
                        if (internSchoolInput) {
                            return true;
                        } else {
                            console.log("Please enter the intern's school");
                            return false;
                        }
                    }
                }
            ]).then(internData => {
                teamData.push(internData);
                addTeamMember();
            })
        } else {
            return teamMemberType;
        }
    })
}

promptManager();