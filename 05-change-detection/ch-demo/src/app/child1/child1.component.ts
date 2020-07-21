import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child1',
  template: `
    <h1>Child1 {{log()}}</h1>
    <grand1></grand1>
  `
})

export class Child1Component implements OnInit {
  constructor() { }

  ngOnInit() { }

  log() {
    console.log('CD: Child1');
  }
}
