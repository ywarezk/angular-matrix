import { Component, OnInit, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AppComponent {{log()}}</h1>
    <child1></child1>
    <child2></child2>
  `,
})
export class AppComponent implements OnInit {
  // hello() {
  //   console.log('cd is now working!');
  //   return 'world';
  // }

  ngOnInit() {
  //   setTimeout(() => {
  //     console.log('timer is running');
  //   }, 1000);
  }


  log() {
    console.log('CD: App');
  }

}

// setTimeout(() => {
//   console.log('timer is running');
//   // window.stamTitle = 'Hell Sweetness';
// });
