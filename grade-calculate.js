class GradeCalculator {
    constructor(scores) {
        this.scores = scores;
    }

    // Method to calculate average score
    calculateAverage() {
        const total = this.scores.reduce((acc, score) => acc + score, 0);
        const average = total / this.scores.length;
        return average;
    }

    // Method to determine grade based on average score
    determineGrade() {
        const average = this.calculateAverage();
        if (average >= 90) {
            return 'A';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else if (average >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}

// Example usage
const scores = [85, 90, 70, 65, 88];
const gradeCalculator = new GradeCalculator(scores);
console.log("Average Score:", gradeCalculator.calculateAverage());
console.log("Grade:", gradeCalculator.determineGrade());
