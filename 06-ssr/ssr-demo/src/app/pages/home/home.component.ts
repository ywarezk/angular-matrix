import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'matrix-home',
  template: `
    <h1>Hello home page</h1>
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `
})

export class HomePageComponent implements OnInit{
  tasks$: Observable<any>;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }
}
