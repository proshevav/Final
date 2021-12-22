import { BaseElement } from "./base-element.js";

export class Text extends BaseElement {
  constructor(id, title, type = "text") {
    super();
    this.title = title;
    this.id = id;
    this.type = type;
    this.styleString = "";
  }

  getElementString() {
    return `
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="${this.styleString}">
                <input class="mdl-textfield__input" type="${this.type}" id="${this.id}">
                <label class="mdl-textfield__label" for="${this.id}" >${this.title}</label>
            </div>
        `;
  }

  getValue() {
    return document.getElementById(this.id).value;
  }

  setStyleString(style) {
    this.styleString = style;
  }
}