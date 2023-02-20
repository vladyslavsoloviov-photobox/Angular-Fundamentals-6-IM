import { Directive, Input } from '@angular/core';
import { ValidationErrors, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { forbiddenEmailValidator } from 'src/app/shared/utils/forbidden-email.validator';

@Directive({
  selector: '[appForbiddenEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true,
   }]
})
export class EmailValidatorDirective implements Validator {
  @Input('appForbiddenEmail') forbiddenEmail = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenEmail ? forbiddenEmailValidator(new RegExp(this.forbiddenEmail, 'i'))(control): null;
  }
}