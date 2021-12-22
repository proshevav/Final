import { BaseElement } from "./base-element.js";

export class DataTable extends BaseElement {
  constructor(headers, data) {
    super();
    this.headers = headers;
    this.data = data;
  }

  showHeader(title) {
    return this.headers.find(
      (header) => header.toLowerCase() === title.toLowerCase()
    );
  }

  getElementString() {
    let thTags = "";
    for (let header of this.headers) {
      thTags += `<th class="mdl-data-table__cell--non-numeric">
                          ${header}
                      </th>`;
    }

    let trTags = "";
    this.data.forEach((element) => {
      trTags += `<tr>`;
      for (let key in element) {
        if (this.showHeader(key)){
          trTags += `<td class="mdl-data-table__cell--non-numeric">
                                ${element[key]}
                              </td>` ;
        }
                              
         }
        
      trTags += `</tr>`;
    });

    return `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                  <thead>
                    <tr>
                      ${thTags}
                    </tr>
                  </thead>
                  <tbody>
                    ${trTags}
                  </tbody>
                </table>
            `;
  }
}