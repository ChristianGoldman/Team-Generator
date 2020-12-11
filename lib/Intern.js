// requirign the employee.js file
const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// creating a new class intern that extends the already built employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    // returning user input about which school they have attended
    getSchool() {
        return this.school;
    };
    // returning the role the user has selected
    getRole() {
        return "Intern";
    };
};
// exporting intern to be utitlize for building html 
module.exports = Intern;