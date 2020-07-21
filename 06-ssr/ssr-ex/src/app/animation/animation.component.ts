/**
 * This component can only work in the browser
 * it displays animation on the screen
 */

import { Component, OnInit, ElementRef } from '@angular/core';
import player from 'lottie-web';

@Component({
  selector: 'lotti-animation',
  template: `
  `
})

export class AnimationComponent implements OnInit {
  constructor(private _element: ElementRef){}

  ngOnInit() {
    player.loadAnimation({
      path: '/assets/data.json',
      container: this._element.nativeElement
    })
  }
}
