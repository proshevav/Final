import { application } from "../app.js";
import { Student } from "../classes/student.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Text } from "../ui/text.js";

export class AddStudentPage extends Page {
  constructor() {
    super("Add New Student");
  }

  createElement() {
    super.createElement();

    let firstname = new Text("txtfirstname", "First Name");
    firstname.appendToElement(this.element);

    let lastname = new Text("txtlastname", "Last Name");
    lastname.appendToElement(this.element);

    let idstudent = new Text("txtidstudent", "ID Student");
    idstudent.appendToElement(this.element);

    let datecreated = new Text("txtdatecreated", "Date Created");
    datecreated.appendToElement(this.element);

    let email = new Text("txtemail", "Email");
    email.appendToElement(this.element);

    let btn = new Button("Save");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.saveStudent(
        firstname.getValue(),
        lastname.getValue(),
        idstudent.getValue(),
        datecreated.getValue(),
        email.getValue()
      )
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>New Student</h3></div>';
  }

  saveStudent(firstname, lastname, idstudent, datecreated, email) {
    let student = new Student(firstname, lastname, datecreated, idstudent, email);
    console.log(student);
    application
      .postData("https://ip-uacs.herokuapp.com/api/student", student)
      .then((result) => {
        console.log(result);
      });
  }
}