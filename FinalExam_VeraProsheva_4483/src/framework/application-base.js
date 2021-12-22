import { TitleBar } from "../ui/title-bar.js";

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    this.defaultRoute = null;
    this.routeMap = {};
  }

  show(element) {
    this.titleBar.appendToElement(element);

    this.titleBar.element.find(".mdl-navigation__link").click((event) => {
      let route = event.target.innerHTML;
      this.activateRoute(route.trim());
    });

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

  activateRoute(route) {
    let content = this.titleBar.element.find(".page-content");
    content.empty();

    this.routeMap[route].appendToElement(content);
  }

  addRoute(id, pageObject, defaultRoute = false, show = true) {
    if (show) {
      this.titleBar.addLink(id, "");
    }

    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }

  getData(url) {
    return fetch(url)
      .then((response) => {
        return response.json().then((data) => {
          return data;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postData(url, data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return data;
      })
      .catch(function (error) {
        console.log("Request failed", error);
        return error;
      });
  }
}