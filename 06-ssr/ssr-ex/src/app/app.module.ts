import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';
import { AnimationComponent } from './animation/animation.component';
import player from 'lottie-web';

@NgModule({
  declarations: [
    AppComponent, AnimationComponent
  ],
  imports: [
    BrowserModule,
    LottieModule.forRoot({
      player: () => player
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
