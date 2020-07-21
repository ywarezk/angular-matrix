import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grand1',
  template: `
    <h1>grand1 {{log()}}</h1>
  `
})

export class Grand1Component implements OnInit {
  constructor() { }

  ngOnInit() { }

  log() {
    console.log('CD: Grand1');
  }
}
