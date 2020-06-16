import { Component, OnInit } from '@angular/core';
import { RouterEventsService } from '../router-events.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      List of router events
    </h1>
    <ul>
      <li *ngFor="let item of events$ | async">
        {{ item }}
      </li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  events$: BehaviorSubject<string[]>;

  constructor(private _routerEvents: RouterEventsService) { }

  ngOnInit() {
    this.events$ = this._routerEvents.routerEvents
  }
}
