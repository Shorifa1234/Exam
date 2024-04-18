class Company {
    constructor(name, address, email, phoneNumber) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Method to display company information
    displayInfo() {
        console.log(`Company Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
    }
}

// Example usage
const myCompany = new Company('ABC Corporation', '123 Main St, City', 'info@abccorp.com', '123-456-7890');
myCompany.displayInfo();
