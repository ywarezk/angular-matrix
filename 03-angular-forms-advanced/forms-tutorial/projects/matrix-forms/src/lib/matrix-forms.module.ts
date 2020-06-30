import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RepeatPasswordValidator } from './password-repeat-validator/repeat-validator.directive';
import { IdValidatorDirective } from './id-validator/id-validator.directive';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [AutoCompleteComponent, RepeatPasswordValidator, IdValidatorDirective],
  exports: [AutoCompleteComponent, RepeatPasswordValidator, IdValidatorDirective]
})
export class MatrixFormsModule { }
