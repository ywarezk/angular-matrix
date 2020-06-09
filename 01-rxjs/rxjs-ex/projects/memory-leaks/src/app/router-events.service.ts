import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterEventsService {
  routerEvents: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor(router: Router) { 
    router.events.subscribe((event) => {
      const current = this.routerEvents.value;
      current.push(event.toString());
      this.routerEvents.next(current);
    })
  }
}
