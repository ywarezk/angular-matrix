import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const HELLO_CONFIG = new InjectionToken<string>('config for the hello serve');

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  message = 'hello';

  constructor(@Optional() @Inject(HELLO_CONFIG) private _config: string) { }

  sayHello = () => {
    console.log(this._config || 'hello');
  }
}
