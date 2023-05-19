import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gam-control',
  templateUrl: './gam-control.component.html',
  styleUrls: ['./gam-control.component.css'],
})
export class GamControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
