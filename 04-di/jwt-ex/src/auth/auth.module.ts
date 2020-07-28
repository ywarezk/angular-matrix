import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [ LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: JWTInterceptor
    },

  ],
})
export class AuthModule { }
