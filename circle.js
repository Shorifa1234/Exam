class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Method to calculate the circumference of the circle
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Creating an object of the Circle class
const circle1 = new Circle(5);

// Calling methods on the object
console.log("Area:", circle1.calculateArea());
console.log("Circumference:", circle1.calculateCircumference());
