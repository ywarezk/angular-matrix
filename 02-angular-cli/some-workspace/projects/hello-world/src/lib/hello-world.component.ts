import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  template: `
    <p>
      hello-world works!
      sadfasdf
      new change
      v0.0.2
      asdfgasdf
      v0.0.3
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
