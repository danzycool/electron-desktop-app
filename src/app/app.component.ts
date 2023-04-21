import { Component, OnInit } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-app';

  max = 1;
  current = 0;

  start() {
    this.current = 0;

    const myInterval = interval(100);

    myInterval
      .pipe(
        takeWhile(() => !this.isFinished),
        tap(() => (this.current += 0.1))
      )
      .subscribe();
  }

  // Finish timer
  finish() {
    this.current = this.max;
  }

  // reset timer
  reset() {
    this.current = 0;
  }

  // Getters to prevent NaN errors
  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal(): number {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
