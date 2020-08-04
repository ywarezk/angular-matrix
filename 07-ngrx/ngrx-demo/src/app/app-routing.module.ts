import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home.component';
import { AboutPageComponent } from './pages/about.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule{}
