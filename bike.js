class Bike {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display bike information
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Example usage
const myBike = new Bike('Honda', 'CBR', 2021);
myBike.displayInfo();
