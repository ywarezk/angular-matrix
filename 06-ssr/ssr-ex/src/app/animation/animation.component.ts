/**
 * This component can only work in the browser
 * it displays animation on the screen
 */

import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'lotti-animation',
  template: `
    <ng-lottie
      width="600px"
      height="500px"
      containerClass="moving-box another-class"
      [options]="options"
    ></ng-lottie>
  `
})

export class AnimationComponent {
  options: AnimationOptions = {
    path: '/assets/data.json',
  };
}
