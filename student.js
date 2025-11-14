let class07Students = [
  "Student0",
  "Student1",
  "Student2",
  "Student3",
  "Student4",
  "Student5",
  "Student6",
];
function addStudentToClass(studentName) {
  class07Students.push(studentName);
}
console.log("studentName are: " + class07Students.join(",")); // You write code here

function getNumberOfStudents() {
  return class07Students.length; // You write code here
}
console.log("Number of students: " + getNumberOfStudents());
