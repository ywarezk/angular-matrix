/**
 * catch every request that we are sending using httpclient
 * for every request add the header: hello: world
 */

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HelloInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers: new HttpHeaders({
                hello: 'world'
            })
        })
        return next.handle(newReq);
    }
    
}