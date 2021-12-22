import { BaseElement } from "./base-element.js";

export class Number extends BaseElement {
  constructor(id, title) {
    super();
    this.title = title;
    this.id = id;
    this.styleString = "";
  }

  getElementString() {
    return `
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="${this.styleString}">
              <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="${this.id}">
              <label class="mdl-textfield__label" for="${this.id}">${this.title}</label>
              <span class="mdl-textfield__error">Input is not a number!</span>
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