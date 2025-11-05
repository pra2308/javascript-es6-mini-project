// app.js
import { Student } from './student.js';

const students = [
  new Student("Prashant Gupta", 23, "JavaScript", "Full Stack Developer"),
  new Student("Riya Sharma", 22, "React", "Frontend Developer"),
  new Student("Aman Verma", 24, "Node.js", "Backend Developer"),
  new Student("Neha Patel", 21, "Python", "Intern")
];

const showStudents = () => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h3>Student List</h3>
    <ul id="studentList">
      ${students.map((s, index) => `<li data-index="${index}" class="student-item">${s.name}</li>`).join("")}
    </ul>
    <div id="details"></div>
  `;

  // Add click listeners for each student
  document.querySelectorAll(".student-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const student = students[index];
      document.getElementById("details").innerHTML = `
        <h4>Student Details</h4>
        <p>${student.getFullDetails()}</p>
      `;
    });
  });
};

document.getElementById("showBtn").addEventListener("click", showStudents);
