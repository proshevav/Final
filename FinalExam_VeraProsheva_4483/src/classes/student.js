import { School } from "./school.js";

export class Student extends School {
  constructor(firstname, lastname, datecreated, idstudent, email) {
    super(firstname, lastname, datecreated, "Student");
    this.idstudent = idstudent;
    this.email = email;
  }
}