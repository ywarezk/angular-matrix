import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloService } from './hello.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {StamModule} from '../stam/stam.module';
import {HelloInterceptor} from './hello.interceptor';
import {HELLO_CONFIG} from './hello.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // StamModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HelloInterceptor
    },

    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HelloInterceptor
    },
    {
      provide: HELLO_CONFIG,
      useValue: 'howdy'
    },
    // HttpClient,
    // HelloService
    // {
    //   provide: 'stam',
    //   useValue: {
    //     hello: 'world'
    //   }
    // },
     {
       provide: 'hello2',
       useValue: 'hello AppModule'
     },
    // {
    //   provide: HelloService,
    //   useClass: HelloService
    // },
    // {
    //   provide: 'stam',
    //   deps: ['hello', HelloService],
    //   useFactory: (helloPiglet, helloService) => {

    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
