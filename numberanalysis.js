class NumberAnalysis {
    constructor(numbers) {
        this.numbers = numbers;
    }

    // Method to find maximum number
    findMax() {
        return Math.max(...this.numbers);
    }

    // Method to find minimum number
    findMin() {
        return Math.min(...this.numbers);
    }

    // Method to calculate sum of numbers
    calculateSum() {
        return this.numbers.reduce((acc, num) => acc + num, 0);
    }
}

// Example usage
const numbers = [10, 25, 7, 32, 15];
const analysis = new NumberAnalysis(numbers);
console.log("Maximum Number:", analysis.findMax());
console.log("Minimum Number:", analysis.findMin());
console.log("Sum of Numbers:", analysis.calculateSum());
