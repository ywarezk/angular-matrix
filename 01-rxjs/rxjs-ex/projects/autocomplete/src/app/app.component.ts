import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <form>
      <input name="search" type="search" placeholder="Search..." (input)="search($event.target.value)" />
    </form>
    <ul>
      <li *ngFor="let item of items$ | async">
        {{ item.title }}
      </li>
    </ul>
  </div>
  `,
})
export class AppComponent implements OnInit {
  public items$: Observable<any>;
  search$: Subject<string> = new Subject();
  
  constructor(private _todoService: TodoService) {}

  search(searchStr: string) {
    this.search$.next(searchStr);
  }

  // stack -> one main thread -> js engine V8
  // only the main thread can do the dom manipulation

  /**
   * throttling
   */
  ngOnInit() {
    this.items$ = this.search$.pipe(
      debounceTime(1000),
      tap((searchStr) => console.log(searchStr)),
      distinctUntilChanged(),
      tap((searchStr) => console.log(searchStr)),
      mergeMap((searchStr: string) => this._todoService.search(searchStr))
    );
  }
}

