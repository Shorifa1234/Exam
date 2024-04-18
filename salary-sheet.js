// Define employee information
const employees = [
    { name: 'John Doe', address: '123 Main St', salary: 5000, bonus: 1000 },
    { name: 'Jane Smith', address: '456 Oak St', salary: 6000, bonus: 1200 },
    { name: 'Alice Johnson', address: '789 Elm St', salary: 5500, bonus: 1100 }
];

// Function to calculate total salary
function calculateTotalSalary(employees) {
    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.salary;
    }
    return totalSalary;
}

// Function to calculate average salary
function calculateAverageSalary(employees) {
    const totalSalary = calculateTotalSalary(employees);
    return totalSalary / employees.length;
}

// Function to display employee information
function displayEmployeeInfo(employees) {
    for (let employee of employees) {
        console.log(`Name: ${employee.name}, Address: ${employee.address}, Salary: ${employee.salary}`);
    }
}

// Example usage
console.log("Total Salary:", calculateTotalSalary(employees));
console.log("Average Salary:", calculateAverageSalary(employees));
displayEmployeeInfo(employees);
