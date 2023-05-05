import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .buttonText {
        color: #ffffff;
      }
    `,
  ],
})
export class AppComponent {
  title = 'assignment-3';
  displayParagraph = false;
  buttonClicks = [];

  toggleParagraph() {
    this.buttonClicks.push(new Date().toString());
    this.displayParagraph = !this.displayParagraph;
  }
}
