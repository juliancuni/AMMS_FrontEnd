import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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