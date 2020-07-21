import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Child1Component} from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Grand1Component } from './grand1/grand1.component';
import { Grand2Component } from './grand2/grand2.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Grand1Component,
    Grand2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
