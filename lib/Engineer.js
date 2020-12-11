// requiring the the employee file to be used on the engineer.js file
const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// building a new class engineer that extends our previously setup class on the employee.js file
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    // returning the user github input
    getGithub() {
        return this.github;
    };
    // returning the user selected role
    getRole() {
        return "Engineer";
    };
};
// exporting engineer to be used to render an html file
module.exports = Engineer;