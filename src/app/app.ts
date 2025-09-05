import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/footer";
import {HeaderComponent} from "./components/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
      <app-header></app-header>

      <main class="min-h-screen">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  currentYear = new Date().getFullYear();

}
