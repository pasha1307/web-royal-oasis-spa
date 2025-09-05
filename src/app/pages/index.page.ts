import { Component } from '@angular/core';

import { AnalogWelcome } from './analog-welcome';
import {HomePage} from "./home";

@Component({
  selector: 'app-home',
  imports: [HomePage],
  template: `
     <app-home/>
  `,
})
export default class HomeComponent {
}
