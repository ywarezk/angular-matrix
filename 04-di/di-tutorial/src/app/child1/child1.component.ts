import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! {{message}}
      <span></span>
    </p>
  `,
  styleUrls: ['./child1.component.css'],

  providers: [
    {
      provide: 'hello',
      useValue: 'hello Child1'
    }
  ]
})
export class Child1Component implements OnInit {

  constructor(@Inject('hello') public message: string) { }

  ngOnInit(): void {
  }

}
