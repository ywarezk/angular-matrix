import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PigletService } from '../piglet.service';

@Component({
  selector: 'app-print-hello',
  template: `
    <p>
      print-hello works! {{message}}
    </p>
  `,
  styleUrls: ['./print-hello.component.css']
})
export class PrintHelloComponent implements OnInit {

  constructor(
    @Inject('hello2') public message: string,
    private _http: HttpClient, private _piglet: PigletService) { }

  ngOnInit(): void {
    this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe();
  }

}
