import { interval, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Component, OnInit, NgZone, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'grand2',
  template: `
    <!-- events do trigger cd -->
    <h1  >grand2 {{log()}} {{counter$ | async}} {{title | async}} </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Grand2Component implements OnInit {
  // input change by reference also trigger cd in on push
  @Input('hello')
  helloObj = {hello: 'world'}

  title = new BehaviorSubject(0);

  counter$: Observable<number>;

  constructor(private _ngZone: NgZone, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    // this._ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('timer in grand2');
    //   }, 50)
    // })

    // timer did not active cd in OnPush
    // setTimeout(() => {
    //   console.log('timer');
    // }, 1000)

    // observable + promise will not trigger cd in on Push
    // interval(1000).subscribe(() => {
    //   console.log('observable');
    // });

    //

    // this.counter$ = interval(1000);

    interval(1000).subscribe((num: number) => {
      this.title.next(num);
      // this._cd.detectChanges();
    })

  }

  log() {
    console.log('CD: Grand2');
  }

  // randomNumber() {
  //   return Math.random();
  // }
}
