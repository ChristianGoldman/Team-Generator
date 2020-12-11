// creatign a new class for the employee info
class Employee {
    // building an constructor that we can utilize in the various .js files
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // setting the getName function equal to the user input
    getName() {
        return this.name;
    };
    // setting getId function equal to the user input
    getId() {
        return this.id;
    };
    // setting the getEmail function equal to the user input
    getEmail() {
        return this.email;
    };
    // setting the getRole function equal to the user selected employee role. This function will be overwritten by the other .js files
    getRole() {
        return "Employee";
    };
};
// exporting the class employee to be utilized later
module.exports = Employee;
// TODO: Write code to define and export the Employee class
