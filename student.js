// student.js
export class Student {
  constructor(name, age, course, role) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.role = role;
  }

  getDetails = () => `${this.name}, ${this.age} years old, enrolled in ${this.course}`;

  getFullDetails = () => `
    <strong>${this.name}</strong><br>
    Role: ${this.role}<br>
    Course: ${this.course}<br>
    Age: ${this.age}
  `;
}
