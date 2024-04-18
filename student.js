class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Method to check if student is passing
    isPassing() {
        if (this.marks >= 40) {
            console.log(`${this.name} is passing.`);
        } else {
            console.log(`${this.name} is failing.`);
        }
    }
}

// Creating objects of Student class
const student1 = new Student('John', 35);
const student2 = new Student('Jane', 50);

// Checking if students are passing
student1.isPassing();
student2.isPassing();

// kronometer 
class Thermometer {
    constructor(initialTemperature) {
        this.temperature = initialTemperature;
    }

    // Method to set temperature
    setTemperature(newTemperature) {
        this.temperature = newTemperature;
        console.log(`Temperature set to ${this.temperature}°C`);
    }

    // Method to display temperature
    displayTemperature() {
        console.log(`Current temperature: ${this.temperature}°C`);
    }
}

// Creating an object of Thermometer class
const thermometer = new Thermometer(25);

// Displaying initial temperature
thermometer.displayTemperature();

// Setting new temperature
thermometer.setTemperature(30);

// Displaying updated temperature
thermometer.displayTemperature();
function printMessage() {
    console.log("I love PHP");
  }
  
  // Call the printMessage function
  printMessage();
  function printLanguages(languages) {
    for (const language of languages) {
      console.log(language);
    }
  }
  
  // The array of languages
  const languagesArray = ['PHP', 'JavaScript', 'Python'];
  
  // Call the printLanguages function with the array (languagesArray) as argument
  printLanguages(languagesArray);