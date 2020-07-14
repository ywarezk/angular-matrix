import { Component, OnInit, Inject } from '@angular/core';

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

  constructor(@Inject('hello2') public message: string) { }

  ngOnInit(): void {
  }

}
