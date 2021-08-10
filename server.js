const inquirer = require('inquirer');
const fs = require('fs');
const { allowedNodeEnvironmentFlags, exit } = require('process');

const questions = () => {

    return inquirer.prompt([
        // ask user which task they would like to execute 
        {
            type: 'list',
            name: 'task',
            message: 'Choose one of the options',
            choices: [
                {
                    name: 'View all departments',
                    value: 'viewDepartment'
                },
                {
                    name: 'View all roles',
                    value: 'viewRoles'
                },
                {
                    name: 'View all employees',
                    value: 'viewEmployees'
                },
                {
                    name: 'Add a department',
                    value: 'addDepartment'
                },
                {
                    name: 'Add a role',
                    value: 'addRoles'
                },
                {
                    name: 'Add an employee',
                    value: 'addEmployee'
                },
                {
                    name: 'Update an employee role',
                    value: 'UpdateEmployee'
                },
                {
                    name: 'Exit',
                    value: 'exit'
                }
            ],
        }, 
    ]).then(answers => {
        let task = answers.task;
        //assign functions based on user answer utilizing switch and case 
        switch(task){
            case "viewDepartment":
                viewDepartment();
                break;
            case "viewRoles":
                viewRoles();
                break;
            case "viewEmployees":
                viewEmployees();
                break;
            case "addDepartment":
                addDepartment();
                break;
            case "addRoles":
                addRoles();
                break;
            case "addEmployee":
                addEmployee();
                break;
            case "updateEmployee":
                updateEmployee();
                break;
            default:
                exit();
        }
    });
};

//add functions
// call questions() after each function 


// {
//     type: 'input',
//     name: 'departmentName',
//     message: 'Provide the department name. (Required)',
//     when: (answers) => answers.task === 'Add a department',
//     validate: departmentNameInput => {
//         if (departmentNameInput) {
//             return true;
//         } else {
//             console.log('Please provide the department name.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'roleName',
//     message: 'Provide the role name. (Required)',
//     when: (answers) => answers.task === 'Add a role',
//     validate: roleNameInput => {
//         if (roleNameInput) {
//             return true;
//         } else {
//             console.log('Please provide the role name.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'roleSalary',
//     message: 'Provide roles salary. (Required)',
//     when: (answers) => answers.task === 'Add a role',
//     validate: roleSalaryInput => {
//         if (roleSalaryInput) {
//             return true;
//         } else {
//             console.log('Please provide the roles salary.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'roleDepartment',
//     message: 'Provide roles department. (Required)',
//     when: (answers) => answers.task === 'Add a role',
//     validate: roleDepartmentInput => {
//         if (roleDepartmentInput) {
//             return true;
//         } else {
//             console.log('Please provide the roles department.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'employeeFirstName',
//     message: 'Provide their first name. (Required)',
//     when: (answers) => answers.task === 'Add an employee',
//     validate: employeeFirstName => {
//         if (employeeFirstName) {
//             return true;
//         } else {
//             console.log('Please provide the employees first name.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'employeeLasttName',
//     message: 'Provide their last name. (Required)',
//     when: (answers) => answers.task === 'Add an employee',
//     validate: employeeLastName => {
//         if (employeeLastName) {
//             return true;
//         } else {
//             console.log('Please provide the employees last name.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'employeeRole',
//     message: 'Provide their role. (Required)',
//     when: (answers) => answers.task === 'Add an employee',
//     validate: employeeLastName => {
//         if (employeeLastName) {
//             return true;
//         } else {
//             console.log('Please provide the employees last name.');
//             return false;
//         }
//     }
// }, {
//     type: 'input',
//     name: 'employeeManager',
//     message: 'Provide their manager. (Required)',
//     when: (answers) => answers.task === 'Add an employee',
//     validate: employeeManager => {
//         if (employeeManager) {
//             return true;
//         } else {
//             console.log('Please provide the employees manager.');
//             return false;
//         }
//     }
// }
questions();

