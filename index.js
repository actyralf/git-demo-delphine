const students = ["Saleh", "Ladan", "Can"];

// Ralf develops a function to randomly select and return a student
// function name: chooseStudent()

let student = "Stacy";

function displaySelectedStudent(student, language) {
  if (language === "de") {
    console.log(`Zur Präsentation der Aufgaben wurde ${student} ausgewählt`);
  } else if (language === "ru") {
    console.log(`${student} был выбран для демонстрации упражнений`);
  } else {
    console.log(`${student} was selected to present her exercises`);
  }
}

displaySelectedStudent(student, "de");
