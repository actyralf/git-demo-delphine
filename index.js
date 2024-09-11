const students = ["Saleh", "Ladan", "Can"];

// Ralf develops a function to randomly select and return a student
// function name: chooseStudent()

// Math.random() 0 - 0.9999
// * 3           0 - 2.9999

function chooseStudent() {
  const index = Math.floor(Math.random() * students.length);
  return students[index];
}

// Anastasiia develops a function that receives a student name and a language and displays a message like this:
// "Zur Präsentation der Aufgaben wurde Ladan ausgewählt" or
// "Ladan was selected to present her exercises"
// function name: displaySelectedStudent(student, language) language: "de" or "en"

function displaySelectedStudent(student) {
  console.log(student);
}

displaySelectedStudent(chooseStudent());
