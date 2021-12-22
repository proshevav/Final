import $ from "jquery";
import { ApplicationBase } from "./framework/application-base.js";
import { AddStudentPage } from "./pages/add-student-page.js";
import { StudentsPage } from "./pages/students-page.js";
import { HomePage } from "./pages/home-page.js";
import { FleetDataService } from "./services/fleet-data-service.js";

export class App extends ApplicationBase {
  constructor() {
    super("Internet Programming");
    this.dataService = new FleetDataService();
    let url = "https://ip-uacs.herokuapp.com/api/Fleet";
    this.getData(url).then((fleet) => {
      this.dataService.loadData(fleet);

      console.log(this.dataService.filterStudentsByIdStudent());
      console.log(this.dataService.getStudentByFirstName());
      console.log(this.dataService.getStudentsSortedByFirstName());
    });

    this.addRoute("Home", new HomePage(), true);
    this.addRoute("Students", new StudentsPage());
    this.addRoute("AddStudent", new AddStudentPage(), false, false);
  }
}

export let application = new App();
application.show($("body"));