let class07Students = [
  "Student0",
  "Student1",
  "Student2",
  "Student3",
  //"Student4",
  //"Student5",
  //"Student6",
];
function addStudentToClass(studentName) {
  if (class07Students.length >= 6 && studentName !== "Queen") {
    return "class07Students is not allowed to have more than 6 items";
  }
  if (class07Students.includes(studentName)) {
    return "Student name is already in the class";
  }
  if (studentName === "Queen") {
    class07Students.push(studentName);
    return studentName + "always welcome";
  }
  if (studentName === " ") {
    return "This is empty,empty is not expected";
  } else {
    class07Students.push(studentName);
    return studentName + " has been added.";
  }
}

function getNumberOfStudents() {
  return class07Students.length; // You write code here
}

console.log(addStudentToClass("Student4"));
console.log(addStudentToClass(" "));
console.log(addStudentToClass("Student5"));
console.log(addStudentToClass("Student6"));
console.log(addStudentToClass("Queen"));
console.log("studentName are: " + class07Students.join(",")); // You write code here
console.log("Number of students: " + getNumberOfStudents());
