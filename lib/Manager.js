const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;