import {Component} from '@angular/core';
import {CustomFunctionService} from "../custom-function.service";

@Component({
  selector: 'app-custom-function',
  templateUrl: './custom-function.component.html',
  styleUrls: ['./custom-function.component.scss']
})
export class CustomFunctionComponent {
  source: Array<any> | Object | String;
  result: string;

  constructor(private customFunction: CustomFunctionService) {
  }

  sourceChange($event) {
    let source;
    switch ($event.value) {
      case "array": {
        source = [
          {tmpl: "My friend is a {opt1}", data: {opt1: "jedi"}},
          [{
            tmpl: "I like to {opt1}, {opt2}",
            data: {opt1: "ride my", opt2: "bicycle"}
          }, {tmpl: "I like to {opt1}, {opt2}", data: {opt1: "ride my", opt2: "bicycle"}}],
          {tmpl: "My friend is a {opt1}", data: {opt1: "jedi"}}
        ];
      }
        break;
      case "object" : {
        source = {tmpl: "My friend is a {opt1}", data: {opt1: "jedi"}};
      }
        break;
      case "string" : {
        source = "I once ate 7 cheeseburgers";
      }
        break;
    }
    this.source = JSON.stringify(source);
    this.result = JSON.stringify(this.customFunction.resolver(source));
  }
}
