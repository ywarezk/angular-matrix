import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child2',
  template: `
    <h1>Child2 {{log()}}</h1>
    <grand2></grand2>
  `
})

export class Child2Component implements OnInit {
  constructor() { }

  ngOnInit() { }

  log() {
    console.log('CD: Child2');
  }
}
