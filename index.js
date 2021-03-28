const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');


function addManager() {
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
                    console.log("Please enter the team manager's office number");
                    return false;
                }
            }
        }
    ]).then(({employeeName, employeeId, employeeEmail, managerOfficeNum}) => {
        this.manager = new Manager(employeeName, employeeId, employeeEmail, managerOfficeNum);
        //console.log(this.manager.getRole());
        //this.role = this.manager.getRole();
        //this.manager['role'] = this.role;
        //this.teamData.push(this.manager);
        //console.log(this.teamData);
    })
};

addManager.prototype.addTeamMember = function() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'anotherEmployee',
            message: 'Would you like to add an engineer, intern, or are you building your team?',
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
                    name: 'employeeId',
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
            ]).then(({employeeName, employeeId, employeeEmail, engineerGitHub}) => {
                this.engineer = new Engineer(employeeName, employeeId, employeeEmail, engineerGitHub);
                this.addTeamMember();
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
                    name: 'employeeId',
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
            ]).then(({employeeName, employeeId, employeeEmail, internSchool}) => {
                this.intern = new Intern(employeeName, employeeId, employeeEmail, internSchool);
                this.addTeamMember();
            })
        } else {
            return teamMemberType;
        }
    })
}

new addManager()
    .then(this.addTeamMember)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch (err => {
        console.log(err);
    })