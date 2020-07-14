import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintHelloComponent } from './print-hello/print-hello.component';
// import { PigletService } from './piglet.service';



@NgModule({
  declarations: [PrintHelloComponent],
  imports: [
    CommonModule,
    // FormsModule
  ],
  providers: [
    // PigletService,
    {
      provide: 'hello2',
      useValue: 'hello StamModule'
    },
  ]
})
export class StamModule { }
