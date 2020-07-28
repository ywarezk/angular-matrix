import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
// import { Docu } from '@angular/platform-server';

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
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr-demo';

  constructor(@Inject(PLATFORM_ID) private _platform) {}

  ngOnInit() {
    if (isPlatformServer(this._platform)) return;

    // Location

    // if (isPlatformBrowser(this._platform)) {
      window.setTimeout(() => {
        console.log('hello timer');
      }, 1000)
    // }

  }
}
