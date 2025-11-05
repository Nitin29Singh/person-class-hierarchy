// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic info
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass 1: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call parent constructor
    this.course = course;
  }

  // Overriding method
  getDetails() {
    return `${super.getDetails()}, Course: ${this.course}`;
  }

  study() {
    return `${this.name} is studying ${this.course}.`;
  }
}

// Subclass 2: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Overriding method
  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }

  teach() {
    return `${this.name} is teaching ${this.subject}.`;
  }
}

// Creating instances
const student1 = new Student("Alice", 20, "Computer Science");
const teacher1 = new Teacher("Mr. Johnson", 40, "Mathematics");

// Display output
const output = `
${student1.getDetails()}
${student1.study()}

${teacher1.getDetails()}
${teacher1.teach()}
`;

console.log(output);
document.getElementById("output").textContent = output;
