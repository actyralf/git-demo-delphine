const students = ["Saleh", "Ladan", "Can"];

// Ralf develops a function to randomly select and return a student
// function name: chooseStudent()

let student = "Stacy";

function displaySelectedStudent(student, language) {
  switch (language) {
    case "de":
      console.log(`Zur Präsentation der Aufgaben wurde ${student} ausgewählt`);
      break;
    case "ru":
      console.log(`${student} был выбран для демонстрации упражнений`);
      break;
    default:
      console.log(`${student} was selected to present her exercises`);
      break;
  }
}

displaySelectedStudent(student, "en");
