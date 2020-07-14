import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  message = 'hello';

  constructor() { }
}
