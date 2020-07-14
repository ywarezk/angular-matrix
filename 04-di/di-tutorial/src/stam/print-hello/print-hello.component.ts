import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-print-hello',
  template: `
    <p>
      print-hello works!
    </p>
  `,
  styleUrls: ['./print-hello.component.css']
})
export class PrintHelloComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe();
  }

}
