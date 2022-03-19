import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: ` <app-observable></app-observable> `,
})
export class AppComponent {
  title = 'anizod';
}
