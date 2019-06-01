// CODE here for your Lambda Classes

class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.age = personProps.age;
    this.location = personProps.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a PERFECT score on ${subject}!`);
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listSubjects() {
    console.log(...this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
}

class ProjectManager extends Instructor {
  constructor(PMProps) {
    super(PMProps);
    this.gradClassName = PMProps.gradClassName;
    this.favInstructor = PMProps.favInstructor;

  }
  standup(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}


// STUDENTS

const misty = new Student({
  name: "Misty",
  age: 26,
  location: "Tuscaloosa",
  previousBackground: "Beekeeper",
  className: "WEB364",
  favSubjects: ["algorithms", "hacking", "animation"]
});

misty.listSubjects();
misty.sprintChallenge("CSS Trivia");

const eduardo = new Student({
  name: "Eduardo",
  age: 25,
  location: "Fargo",
  previousBackground: "Cowboy",
  className: "IOS88",
  favSubjects: ["horsemanship", "security", "databases"]
});

eduardo.speak();
eduardo.PRAssignment("game design");

// INSTRUCTORS
const beatrice = new Instructor({
  name: "Beatrice",
  age: 41,
  location: "Cleveland",
  specialty: "mousing",
  favLanguage: "Perl",
  catchPhrase: "Slick as an oiled hound!"
});

const carter = new Instructor({
  name: "Carter",
  age: 36,
  location: "Toledo",
  specialty: "keyboard shortcuts",
  favLanguage: "Arduino",
  catchPhrase: "Bundle up, it's CODE in here!"
});

beatrice.speak();
console.log(`I can't wait to show you all some ${beatrice.specialty} tricks! ${beatrice.catchPhrase}!!!`);


console.log(`My name is ${carter.name} and ${carter.specialty} fire me up! ${carter.catchPhrase}!!!`);

// PROJECT MANAGERS

const garvin = new ProjectManager({
  name: "Garvin",
  age: 38,
  location: "Baton Rouge",
  gradClassName: "CS3",
  favInstructor: "Bonnie",
  specialty: "gumbo",
  favLanguage: "Python",
  catchPhrase: "Let me bayou dinner, friends!"
});

garvin.standup('Keyboard Wizards');
console.log(`${garvin.name} is sad ${garvin.favInstructor} has retired.`);
garvin.speak();
console.log(`Enough ${garvin.favLanguage} for one day. ${garvin.catchPhrase}`);


const sheila = new ProjectManager({
  name: "Sheila",
  age: 55,
  location: "Portland",
  gradClassName: "WEB2",
  favInstructor: "Ichabod",
  specialty: "geocaching",
  favLanguage: "Cobalt",
  catchPhrase: "Where my muskrats at!?!?"
});

sheila.debugsCode(eduardo, "horsemanship");
sheila.speak();
sheila.demo("bug hunting");
console.log(`${sheila.name} yells: ${sheila.catchPhrase}`);