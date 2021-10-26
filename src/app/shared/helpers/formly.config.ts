import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <input type="file" [formControl]="$any(formControl)" [formlyAttributes]="field">
  `,
})
export class FormlyFieldFile extends FieldType {}



import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // tslint:disable-next-line
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true },
  ],
})
// https://github.com/angular/angular/issues/7341
export class FileValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any) { }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}



export function EmailValidator(control: any): any {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) ? null : { 'email': true };
}

export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
    return `"${field.formControl?.value}" Email format i gabuar`;
}

export function minlengthValidationMessages(err: any, field: any) {
    return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function fieldMatchValidator(control: AbstractControl) {
    const { password, passwordConfirm } = control.value;
    if (!passwordConfirm || !password) {
        return null;
    }
    if (passwordConfirm === password) {
        return null;
    }
    return { fieldMatch: { message: 'Fjalekalimet nuk perputhen' } };
}

export const config = {
    types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
    extras: { lazyRender: true },
    validators: [
        { name: "email", validation: EmailValidator },
        { name: 'fieldMatch', validation: fieldMatchValidator },
    ],
    validationMessages: [
        { name: 'required', message: 'S\'mund te lihet bosh' },
        { name: "email", message: EmailValidatorMessage },
        { name: 'minlength', message: 'Te pakten 6 karaktere' },
    ],
}


