

import template from "/src/app/views/welcome.html";
import {Component} from "./components";
  // TODO #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent extends Component {
    constructor() {
      super(template)
      this.template = template;
    }

    // TODO #extends: call super(template)
    // TODO #import-html: assign template to this.template


    // put component in global scope, to be runnable right from the HTML.
    // TODO #class: turn function into a method of WelcomeComponent
    /* method WelcomeComponent.init */

    init() {
      let form = document.querySelector("form.form-signin");

      form.addEventListener(
          "submit",
          (event) => {
            event.preventDefault();
            if (form.checkValidity() === false) {
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              let name = event.srcElement.querySelector("#nickname").value;
              let size = parseInt(event.srcElement.querySelector("#size").value);

              let gamePage = "./#game";
              // TODO #template-literals:  use template literals (backquotes)
              window.location = `${gamePage}?name=${name}&size=${size}`;
            }
          },
          false
      );

      return this;
    };
  }

    // TODO #class: turn function into a method of WelcomeComponent


