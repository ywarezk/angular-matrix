import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldModule } from 'hello-world-matrix-0.0.2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
