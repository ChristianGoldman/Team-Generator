// requiring the employee.js to have access to the class employee
const Employee = require("./Employee")
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// building a new class and extending the employee class build on the employee.js file
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
// returning the role the user has selected
    getRole() {
        return "Manager";
    };
// returning user officenumber input
    getOfficeNumber() {
        return this.officeNumber;
    }
};
// exporting manager to be utilize for rendering the html later
module.exports = Manager;