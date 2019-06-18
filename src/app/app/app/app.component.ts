import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  links = [{
    label: "Chat Application",
    url: "/chatapp"
  }, {
    label: "Custom Function ",
    url: "/custom-function"
  }];
  activeLink = window.location.pathname;
}
