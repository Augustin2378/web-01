// TODO #import-html: use ES default imports to import game.component.html as template
// TODO #export-functions: remove the IIFE
import { parseUrl } from "../../scripts/utils";
import template from "./score.component.html";
import {Component} from "../../scripts/components";
import "./score.component.css";
  // TODO #export-functions: export function ScoreComponent
  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */
  export class ScoreComponent extends Component {
    constructor() {
      super(template)
      let params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
      this.template = template;
    }



    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    };

  }
