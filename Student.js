import { Person } from "./Person.js";

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  printName() {
    console.log(this.firstName + " " + this.lastName);
  }
  printAge() {
    console.log(this.age);
  }
}

let stud = new Student("Semion", "Furlender", 32, 100);

stud.printAge();
