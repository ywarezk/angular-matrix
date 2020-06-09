import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/">
            Home
          </a>
        </li>
        <li>
          <a routerLink="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'memory-leaks';
}
