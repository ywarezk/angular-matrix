/**
 * catch every request that we are sending using httpclient
 * for every request add the header: hello: world
 */

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, InjectionToken, Optional } from '@angular/core';
import { Observable, config } from 'rxjs';

interface HelloConfig {
  message: string;
}

const HELLO_CONFIG = new InjectionToken<HelloConfig>('this key is used to config our interceptor');



@Injectable()
export class HelloInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(HELLO_CONFIG) private _config: HelloConfig) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers: new HttpHeaders({
                hello: this._config ? this._config.message : 'world'
            })
        })
        return next.handle(newReq);
  }

}
