const students = ["Saleh", "Ladan", "Can"];

// Ralf develops a function to randomly select and return a student
// function name: chooseStudent()

// Anastasiia develops a function that receives a student name and a language and displays a message like this:
// "Zur Präsentation der Aufgaben wurde Ladan ausgewählt" or
// "Ladan was selected to present her exercises"
// function name: displaySelectedStudent(student, language) language: "de" or "en"

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
