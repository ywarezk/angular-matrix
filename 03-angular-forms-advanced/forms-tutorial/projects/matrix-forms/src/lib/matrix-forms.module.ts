import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RepeatPasswordValidator } from './password-repeat-validator/repeat-validator.directive';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [AutoCompleteComponent, RepeatPasswordValidator],
  exports: [AutoCompleteComponent, RepeatPasswordValidator]
})
export class MatrixFormsModule { }
