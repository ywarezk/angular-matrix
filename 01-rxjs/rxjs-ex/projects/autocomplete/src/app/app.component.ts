import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <form>
      <input name="search" type="search" placeholder="Search..." />
    </form>
    <ul>
      <li *ngFor="let item of items">
        {{ item }}
      </li>
    </ul>
  </div>
  `,
})
export class AppComponent {
  public items: any[] = [];

  private _search = '';

  get search() {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
  }
}

