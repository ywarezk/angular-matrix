import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works! {{message}}
    </p>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(@Inject('hello') public message: string) { }

  ngOnInit(): void {
  }

}
