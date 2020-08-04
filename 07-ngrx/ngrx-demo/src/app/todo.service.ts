import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
  // tasks.next([... ])
  tasks: BehaviorSubject<string[]> = new BehaviorSubject([
    'Walk with Piglet',
    'Play with Sweetness',
    '...'
  ])

  constructor() { }

}
