import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Login app</h1>

    <matrix-login></matrix-login>

    <matrix-todo></matrix-todo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
