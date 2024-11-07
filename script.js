// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
    // ARRAY TO HOLD ALL [EMPLOYEES]
    const employees = [];

    // LOOP TO COLLECT EMPLOYEE DATA
    let continueLoop = true;
    while (continueLoop) {
        // PROMPT FOR EMPLOYEE DATA
        const firstName = prompt("Enter employee's first name:");
        const lastName = prompt("Enter employee's last name:");
        let salary = prompt("Enter employee's annual salary:");

        // DATA VALIDATION FOR ANNUAL SALARY
        if (isNaN(salary)) {
            salary = 0;
        }

        // OBJECT FOR EACH {EMPLOYEE}
        const employee = {
            firstName: firstName,
            lastName: lastName,
            // CONVERT STRING TO FLOAT
            salary: parseFloat(salary),
        };

        // ADD EMPLOYEE TO ARRAY
        employees.push(employee);

        // ASK USER TO ADD ANOTHER EMPLOYEE
        continueLoop = confirm("Click OK to add another employee.\rClick Cancel to finish and display list of employees entered.");
    }

    // RETURN ARRAY OF EMPLOYEES
    return employees;
};

// CALCULATE AND DISPLAY AVERAGE SALARY
const displayAverageSalary = function (employeesArray) {
    let totalSalary = 0;
    const numEmployees = employeesArray.length;

    for (const employee of employeesArray) {
        totalSalary += employee.salary;
    }

    const averageSalary = totalSalary / numEmployees;
    console.log(`The average employee annual salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
};

// RANDOMLY SELECT AN EMPLOYEE
const getRandomEmployee = function (employeesArray) {
    const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector("#employee-table");

    // Clear the employee table
    employeeTable.innerHTML = "";

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
};

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log("==============================");

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
