const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeArray = [];

function test() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
    ])
    .then(function (answers) {
      inquirer
        .prompt([
          {
            type: "input",
            name: "office",
            message: "What is your office Number?",
            when: () => answers.role === "Manager",
          },
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            when: () => answers.role === "Engineer",
          },
          {
            type: "input",
            name: "school",
            message: "What school did you attend?",
            when: () => answers.role === "Intern",
          },
        ])
        .then(function (specAnswer) {
          console.log(answers.role);
          switch (answers.role) {
            case "Engineer":
              const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                specAnswer.github
              );
              employeArray.push(engineer);
              testAgain();
              break;

            case "Intern":
              const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                specAnswer.school
              );
              employeArray.push(intern);
              testAgain();
              break;

            case "Manager":
              const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                specAnswer.office
              );
              employeArray.push(manager);
              testAgain();
              break;
            default:
              console.log(employeArray);
              testAgain();
          }
        });
    });
}
function testAgain() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "again",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then(function (again) {
      if (again.again === "Yes") {
        test();
      } else {
        //checking to see if output folder not existed
        if(!fs.existsSync(OUTPUT_DIR)){
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFile(outputPath, render(employeArray), (err) => {
          if (err) throw err;
        });
      }
    });
}

test();

// do first prompt get answers
// 2nd inquirer prompt inside of first .then function
// if statement checks what role selected then displays corresponding string

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
