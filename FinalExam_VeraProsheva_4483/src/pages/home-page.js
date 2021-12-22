import { application } from "../app.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";

export class HomePage extends Page {
  constructor() {
    super("Home");
  }

  createElement() {
    super.createElement();

    let styleString =
      "width: 300px; height: 80px; font-size: 26px; margin: 10px;";
    let b = new Button("Students List");
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute("Students"));
  }

  getElementString() {
    return '<div style="text-align: center;"></div>';
  }
}