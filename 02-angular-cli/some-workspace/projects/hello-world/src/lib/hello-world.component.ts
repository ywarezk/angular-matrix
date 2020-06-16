import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  template: `
    <p>
      hello-world works!
      sadfasdf
      new change
    </p>
  `,
  styles: [
  ]
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
